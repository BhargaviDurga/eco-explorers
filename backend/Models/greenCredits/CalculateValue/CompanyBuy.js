import company from "../../../Database/Schemas/Company.js";
import createTransaction from "../../Transactions/createTransaction.js";
import {v4 as uuidv4} from 'uuid';
const CompanyBuy = async (companyId, noOfCredits, creditPrice) => {
    try {
        // console.log(comp,companyId)
        const comp = await company.findById(companyId);
        console.log(comp.transactionHistory);
        if (!comp) {
            throw new Error("Company not found");
        }
        comp.creditsAvailable += noOfCredits;
        comp.transactionHistory.push({
            id: comp._id,
            date: new Date(),
            creditPrice: creditPrice,
            noOfCredits: noOfCredits,
        });

        await comp.save();

        const TransactionObj = {
            TransactionId: uuidv4(),
            category: "Company",
            PersonName: comp._id,
            creditValue: creditPrice * noOfCredits,
            NoOfCredits: noOfCredits,
            TransactionDate: new Date(),
            TransactionType: "Buy"
        };

        // await createTransaction({ TransactionObj });

        return 1;
    }
    catch (error) {
        console.error(error);
        return error.message;
    }
}

export default CompanyBuy;