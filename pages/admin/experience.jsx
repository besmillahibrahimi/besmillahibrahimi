import AdminLayout from "@/components/layout/AdminLayout";
import TabLayout from "@/components/widget/TabLayout";
import ExperienceList from "@/components/admin/experience/ExperienceList";
import NewExperience from "@/components/admin/experience/NewExperience";

const Experience = () => {
    const tabs = [
        {label: "List"}, {label: "New"},
    ]

    const bodies = [
        ExperienceList, NewExperience
    ]
    return (
        <TabLayout tabs={tabs} bodies={bodies}/>
    )
}

Experience.Layout = AdminLayout;

export default Experience;