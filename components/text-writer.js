import React from "react";

class QuoteState {
    static BeforeQuote = new QuoteState(0);
    static Quote = new QuoteState(1);
    static AfterQuote = new QuoteState(2);

    constructor(order) {
        this.order = order;
    }

    static getQuoteState(order) {
        if (order === 0)
            return QuoteState.BeforeQuote;
        else if (order === 1)
            return QuoteState.Quote;
        else return QuoteState.AfterQuote;
    }
}

class TextWriter extends React.Component {
    constructor(props) {
        super(props);
        this.list = [
            'develop "android & ios" application',
            'build "web" interface',
            'write "REST" API',
            'design & analyze "databases" ',
            'develop "desktop" application',
            'can brainstorm "ideas" ',
            'design mobile "ux/ui" ',
            'code "nodejs" backend',
            'establish well communication'
        ]

        this.state = {
            beforeQuote: '',
            afterQuote: '',
            quote: '',
            quoteState: QuoteState.BeforeQuote,
        }
        this.charIndex = -1;
        this.sentenceIndex = 1;
        this.chars = this.list[0].split('')

        this.clearText = this.clearText.bind(this);
        this.writeText = this.writeText.bind(this);
    }

    clearText() {
        if (this.chars.length > 0) {
            this.chars.splice(this.charIndex--, 1)
            this.setState(pre => {
                switch (pre.quoteState) {
                    case QuoteState.BeforeQuote:
                        return {
                            ...pre,
                            beforeQuote: pre.beforeQuote.slice(0, pre.beforeQuote.length - 1),
                            quoteState: pre.beforeQuote.length === 0 ? QuoteState.getQuoteState(pre.quoteState.order - 1) : pre.quoteState
                        }
                    case QuoteState.Quote:
                        return {
                            ...pre,
                            quote: pre.quote.slice(0, pre.quote.length - 1),
                            quoteState: pre.quote.length === 0 ? QuoteState.getQuoteState(pre.quoteState.order - 1) : pre.quoteState
                        }
                    case QuoteState.AfterQuote:
                        return {
                            ...pre,
                            afterQuote: pre.afterQuote.slice(0, pre.afterQuote.length - 1,),
                            quoteState: pre.afterQuote.length === 0 ? QuoteState.getQuoteState(pre.quoteState.order - 1) : pre.quoteState
                        }
                    default:
                        return pre;
                }
            })
        } else {
            if (this.sentenceIndex > this.list.length - 1)
                this.sentenceIndex = 0;
            this.chars = this.list[this.sentenceIndex++].split('');
            clearInterval(this.intervalId)
            this.intervalId = setInterval(() => this.writeText(), 150);
        }
    }

    writeText() {
        if (this.charIndex < this.chars.length - 1) {
            ++this.charIndex;
            const current = this.chars[this.charIndex];

            if (current === '"') {
                const nextChar = this.chars[++this.charIndex];
                this.setState(pre => {
                    return {
                        ...pre,
                        quoteState: QuoteState.getQuoteState(pre.quoteState.order + 1),
                        quote: pre.quoteState === QuoteState.BeforeQuote ? `${nextChar}` : pre.quote,
                        afterQuote: pre.quoteState === QuoteState.Quote ? `${nextChar}` : pre.afterQuote
                    }
                })
            } else
                this.setState(pre => {
                    switch (pre.quoteState) {
                        case QuoteState.BeforeQuote:
                            return {...pre, beforeQuote: `${pre.beforeQuote}${current}`}
                        case QuoteState.Quote:
                            return {...pre, quote: `${pre.quote}${current}`}
                        case QuoteState.AfterQuote:
                            return {...pre, afterQuote: `${pre.afterQuote}${current}`}
                    }

                })
        } else {
            clearInterval(this.intervalId)
            this.timeoutId = setTimeout(() => {
                this.intervalId = setInterval(() => this.clearText(), 40)
            }, 1000)
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        clearTimeout(this.timeoutId);
    }

    componentDidMount() {
        this.chars = this.list[0].split('');
        this.intervalId = setInterval(() => {
            this.writeText();
        }, 150)
    }

    render() {
        return (
            <div className={`text-white h-10 lg:h-auto text-center lg:text-left`}>
                <span className={`text-[#d62828]`}>&lt;</span>
                <span className={`text-primary-600`}>code</span>
                <span className={`text-[#d62828]`}>&gt;</span> I <span>{this.state.beforeQuote}<span
                className={`text-primary-600 font-bold`}><u>{this.state.quote}</u></span>{this.state.afterQuote}</span>
                <span className={`text-gray-300`}>|</span>
                <span className={`text-[#d62828]`}>&lt;/</span>
                <span className={`text-primary-600`}>code</span>
                <span className={`text-[#d62828]`}>&gt;</span>
            </div>
        );
    }
}

export default TextWriter;