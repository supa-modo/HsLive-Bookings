class Transaction {
  constructor(amount, currency, sourceAccount, targetAccount) {
    this.amount = amount;
    this.currency = currency;
    this.sourceAccount = sourceAccount;
    this.targetAccount = targetAccount;
    this.timestamp = new Date();
  }

  validate() {
    // Check for required fields
    if (
      !this.amount ||
      !this.currency ||
      !this.sourceAccount ||
      !this.targetAccount
    ) {
      throw new Error("Missing required fields");
    }

    // Validate amount
    if (this.amount <= 0 || !Number.isFinite(this.amount)) {
      throw new Error("Invalid amount");
    }

    // Validate currency format (assuming ISO currency codes)
    if (!/^[A-Z]{3}$/.test(this.currency)) {
      throw new Error("Invalid currency format");
    }

    // Validate account numbers (assuming 10-digit format)
    const accountRegex = /^\d{10}$/;
    if (
      !accountRegex.test(this.sourceAccount) ||
      !accountRegex.test(this.targetAccount)
    ) {
      throw new Error("Invalid account number");
    }

    return true;
  }

  process() {
    try {
      this.validate();
      // Implement actual transaction processing logic here
      return {
        status: "success",
        transactionId: Math.random().toString(36).substr(2, 9),
        timestamp: this.timestamp,
      };
    } catch (error) {
      return {
        status: "failed",
        error: error.message,
        timestamp: this.timestamp,
      };
    }
  }
}

// Test cases
const validTransaction = new Transaction(
  100.5,
  "USD",
  "1234567890",
  "0987654321"
);
console.log(validTransaction.process());

const invalidTransaction = new Transaction(
  50,
  "USD",
  "1234567890",
  "1234567890"
);
console.log(invalidTransaction.process());

class FinancialDataAnalyzer {
  constructor(transactions) {
    this.transactions = transactions;
  }

  calculateMetrics() {
    const metrics = {
      totalVolume: 0,
      averageAmount: 0,
      maxTransaction: 0,
      minTransaction: Infinity,
      transactionCount: this.transactions.length,
      currencyDistribution: {},
    };

    this.transactions.forEach((transaction) => {
      // Update total volume
      metrics.totalVolume += transaction.amount;

      // Update max and min
      metrics.maxTransaction = Math.max(
        metrics.maxTransaction,
        transaction.amount
      );
      metrics.minTransaction = Math.min(
        metrics.minTransaction,
        transaction.amount
      );

      // Update currency distribution
      metrics.currencyDistribution[transaction.currency] =
        (metrics.currencyDistribution[transaction.currency] || 0) + 1;
    });

    // Calculate average
    metrics.averageAmount = metrics.totalVolume / metrics.transactionCount;

    return metrics;
  }

  findAnomalies(threshold = 2) {
    const { averageAmount } = this.calculateMetrics();

    return this.transactions.filter((transaction) => {
      return (
        Math.abs(transaction.amount - averageAmount) > threshold * averageAmount
      );
    });
  }

  generateReport() {
    const metrics = this.calculateMetrics();
    const anomalies = this.findAnomalies();

    return {
      metrics,
      anomalies,
      reportTimestamp: new Date(),
      summary: `Processed ${metrics.transactionCount} transactions with total volume of ${metrics.totalVolume}. Found ${anomalies.length} anomalies.`,
    };
  }
}

// Test data
const testTransactions = [
  { amount: 100, currency: "USD", timestamp: new Date() },
  { amount: 200, currency: "EUR", timestamp: new Date() },
  { amount: 1500, currency: "USD", timestamp: new Date() }, // Anomaly
  { amount: 150, currency: "GBP", timestamp: new Date() },
];

const analyzer = new FinancialDataAnalyzer(testTransactions);
console.log(analyzer.generateReport());

class FinancialDataValidator {
  static validateAmount(amount) {
    if (typeof amount !== "number" || isNaN(amount)) {
      throw new Error("Amount must be a valid number");
    }
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }
    if (amount > 1000000) {
      throw new Error("Amount exceeds maximum limit");
    }
    return true;
  }

  static validateDate(date) {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      throw new Error("Invalid date format");
    }
    if (parsedDate > new Date()) {
      throw new Error("Future dates not allowed");
    }
    return true;
  }

  static validateTransaction(transaction) {
    const errors = [];

    try {
      this.validateAmount(transaction.amount);
    } catch (e) {
      errors.push(e.message);
    }

    try {
      this.validateDate(transaction.date);
    } catch (e) {
      errors.push(e.message);
    }

    if (
      !transaction.description ||
      transaction.description.trim().length === 0
    ) {
      errors.push("Description is required");
    }

    if (errors.length > 0) {
      return {
        isValid: false,
        errors,
      };
    }

    return {
      isValid: true,
      validatedData: {
        ...transaction,
        amount: Number(transaction.amount),
        date: new Date(transaction.date),
      },
    };
  }
}

// Test cases
const transactions = [
  {
    amount: 100.5,
    date: "2024-12-20",
    description: "Valid transaction",
  },
  {
    amount: -50,
    date: "2025-01-01",
    description: "",
  },
];

transactions.forEach((transaction) => {
  console.log(FinancialDataValidator.validateTransaction(transaction));
});
