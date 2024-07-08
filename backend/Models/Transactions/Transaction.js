import TransactionsModel  from "../../Database/Schemas/Transactions.js";

const createTransaction = async ({TransactionObj}) => {
    try {
        const Transaction = new TransactionsModel({
            TransactionId: TransactionObj.TransactionId,
            category: TransactionObj.category,
            PersonName: TransactionObj.PersonName,
            creditValue: TransactionObj.creditValue,
            NoOfCredits: TransactionObj.NoOfCredits
        });
        const savedTransaction = await Transaction.save();
        return savedTransaction;
    }
    catch (error) {
        return error;
    }
}

export default createTransaction;