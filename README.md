# Welcome to the Product Management using SignalR and Entity Framework Repository

## Overview
This repository demonstrates how to use SignalR with Entity Framework to manage products in a real-time web application. SignalR enables real-time web functionality, allowing server-side code to push content to clients instantly as it becomes available. Entity Framework is an ORM that helps in accessing the database in an object-oriented way.

## Features
- **Real-Time Updates:** Instantly update product listings across all clients.
- **Entity Framework Integration:** Efficient data management with Entity Framework.
- **Scalable Architecture:** Designed to scale for larger applications.

## Getting Started

### Prerequisites
- [.NET Core SDK](https://dotnet.microsoft.com/download)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/product-management-using-signalr-and-entity-framework.git
    cd product-management-using-signalr-and-entity-framework
    ```

2. **Restore dependencies:**
    ```bash
    dotnet restore
    ```

3. **Update database:**
    ```bash
    dotnet ef database update
    ```

4. **Run the application:**
    ```bash
    dotnet run
    ```

## Usage
Once the application is running, you can access the product management interface via your web browser. Any changes made to the product data will be reflected in real-time across all connected clients.

## Project Structure
- **/Controllers:** Contains API controllers for product management.
- **/Models:** Contains Entity Framework models.
- **/Hubs:** Contains SignalR hubs for real-time communication.
- **/Data:** Contains the database context and migration files.

## Contact
For any questions or inquiries, please reach out:

**Email:** [truongtanhuy3006@gmail.com](mailto:truongtanhuy3006@gmail.com)

&#169; 2024 th3y3m
