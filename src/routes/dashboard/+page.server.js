import db from "$lib/server/database.js";
import { redirect, fail } from "@sveltejs/kit";

export const load = async ({ params, cookies }) => {
  const userId = cookies.get("username");
  const account = await db.collection("account");
  const transaction = await db.collection("transaction");

  const accounts = await account.find({ user: userId }).toArray();
  const transactions = await transaction.find({ user: userId }).toArray();

  const accountData = accounts.map((accounts) => ({
    ...accounts,
    _id: accounts._id.toString(),
  }));

  const transactionData = transactions.map((transactions) => ({
    ...transactions,
    _id: transactions._id.toString(),
  }));

  return {
    accounts: accountData || [],
    transactions: transactionData || [],
  };
};

export const actions = {
  addAccount: async ({ cookies, request }) => {
    const data = await request.formData();
    const userId = cookies.get("username");
    const account = await db.collection("account");
    const name = data.get("name");
    const balance = data.get("balance");
    const type = data.get("type");

    if (name === "" || balance === "" || type === "") {
      return {
        status: 400,
        body: {
          message: "Fill all fields",
        },
      };
    }

    const newAccount = {
      name: name,
      balance: balance,
      type: type,
      user: userId,
    };

    try {
      await account.insertOne(newAccount);
      return {
        status: 200,
        body: {
          message: "Account added successfully",
        },
        accountState: true,
      };
    } catch (error) {
      return {
        status: 500,
        body: {
          message: "Something went wrong",
        },
      };
    }
  },
  addTransaction: async ({ cookies, request }) => {
    const data = await request.formData();
    const userId = cookies.get("username");
    const transaction = await db.collection("transaction");
    const accountName = data.get("accountName");
    const amount = data.get("amount");
    const description = data.get("description");

    if (accountName === "" || amount === "" || description === "") {
      return {
        status: 400,
        body: {
          message: "Fill all fields",
        },
      };
    }

    const newTransaction = {
      accountName: accountName,
      amount: amount,
      description: description,
      user: userId,
    };

    const account = await db.collection("account");
    const accounts = await account
      .find({ $and: [{ user: userId }, { name: accountName }] })
      .toArray();
    const accountBalance = accounts[0].balance;

    console.log("accounts", accounts);
    console.log("accountBalance", accountBalance);

    const newBalance = parseInt(accountBalance) - parseInt(amount);

    try {
      await transaction.insertOne(newTransaction);
      await account.updateOne(
        { $and: [{ user: userId }, { name: accountName }] },
        { $set: { balance: newBalance } },
      );
      return {
        status: 200,
        body: {
          message: "Account added successfully",
        },
        transactionState: true,
      };
    } catch (error) {
      return {
        status: 500,
        body: {
          message: "Something went wrong",
        },
      };
    }
  },
};
