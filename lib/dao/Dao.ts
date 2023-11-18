import {
    Collection,
    Filter,
    FindOptions,
    Document,
    UpdateFilter,
    FindOneAndUpdateOptions,
    FindOneAndDeleteOptions, FindCursor, WithId
} from "mongodb";

class Dao {
    readonly model: Collection<Document>;

    constructor(model: Collection<Document>) {
        this.model = model;
    }

    create(doc: object) {
        return this.model.insertOne(doc);
    }

    createAll(docs: Array<Object>) {
        return this.model.insertMany(docs);
    }

    find(filter: Filter<Document>, options: FindOptions = {}) {
        return this.model.find(filter, options).toArray();
    }

    findOne(filter: Filter<Document>, options: FindOptions = {}) {
        return this.model.findOne(filter, options)
    }

    findById(_id: String, options: FindOptions = {}) {
        return this.model.findOne({_id}, options);
    }

    findOneAndUpdate(filter: Filter<Document>, update: UpdateFilter<Document>, options: FindOneAndUpdateOptions) {
        return this.model.findOneAndUpdate(filter, update, options)
    }

    findByIdAndUpdate(_id: String, update: UpdateFilter<Document>, options: FindOneAndUpdateOptions) {
        return this.model.findOneAndUpdate({_id}, update, options);
    }

    findOneAndDelete(filter: Filter<Document>, update: UpdateFilter<Document>, options: FindOneAndDeleteOptions) {
        return this.model.findOneAndDelete(filter, options)
    }

    findByIdAndDelete(_id: String, update: UpdateFilter<Document>, options: FindOneAndDeleteOptions) {
        return this.model.findOneAndDelete({_id}, options);
    }
}

export default Dao;