import MembersTitle from "@/components/MembersTitle/MembersTitle";
import MembersSpeak from "@/components/MembersSpeak/MembersSpeak";
import MembersServices from "@/components/MembersServices/MembersServices";
import MembersSchema from "@/components/MembersSchema/MembersSchema";
import MembersAdditionalServices from "@/components/MembersAdditionalServices/MembersAdditionalServices";
import data from "@/data/data";
const Members = () => {
    return (
        <main>
            <MembersTitle/>
            <MembersSpeak/>
            <MembersServices/>
            <MembersSchema/>
            <MembersAdditionalServices info={data.membersInfo[1]}/>
        </main>
    );
};
export default Members;