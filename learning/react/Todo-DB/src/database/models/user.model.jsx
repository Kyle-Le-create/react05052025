const userModel = {
  tableName: "users",
  columns: {
    id: "VARCHAR(50) PRIMARY KEY",
    username: "VARCHAR(100) UNIQUE NOT NULL",
    password: "VARCHAR(255) NOT NULL",
    created_at: "TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
    updated_at:
      "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
  },
  createTable() {
    const columns = Object.entries(this.columns)
      .map(([column, definition]) => `${column} ${definition}`)
      .join(", ");

    return `CREATE TABLE IF NOT EXISTS ${this.tableName} (${columns})`;
  },
};

module.exports = userModel;
