const todoModel = {
  tableName: "todos",
  columns: {
    id: "VARCHAR(50) PRIMARY KEY",
    user_id: "VARCHAR(50) NOT NULL",
    title: "VARCHAR(255) NOT NULL",
    description: "TEXT",
    completed: "BOOLEAN DEFAULT FALSE",
    created_at: "TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
    updated_at:
      "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
    // Foreign key constraint
    "FOREIGN KEY (user_id)": "REFERENCES users(id) ON DELETE CASCADE",
  },
  createTable() {
    const columns = Object.entries(this.columns)
      .map(([column, definition]) => `${column} ${definition}`)
      .join(", ");

    return `CREATE TABLE IF NOT EXISTS ${this.tableName} (${columns})`;
  },
};

module.exports = todoModel;
