
# Whovians.fr

Welcome to the Whovians.fr project! This is a student project created for a Doctor Who fan event. The project consists of a frontend built with React, a backend API built with Node.js and Express, and a MySQL database. This guide will help you set up the project on your local machine using Docker.

## Prerequisites

Before you begin, make sure you have the following software installed on your machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup

Follow these steps to set up the project:

1. **Clone the Repository**

    ```sh
    git clone https://github.com/yourusername/whovians.fr.git
    cd whovians.fr
    ```

2. **Make the Setup Script Executable**

    ```sh
    chmod +x setup
    chmod +x run
    ```

3. **Run the Setup Script**

    Execute the setup script to configure the environment variables, create the Docker network, and start the containers.

    ```sh
    ./setup
    ```

    The script will prompt you for the following information:
    - MySQL root password
    - MySQL database name
    - MySQL user
    - MySQL user password
    - API port (default: 5000)
    - Frontend port (default: 80)

4. **Run Services**

    Execute the run script to launch either the website and the api, only after having setuped the projet.
    First launch may take long.
    
    ```sh
    ./run
    ```

4.bis **Setup and Run the Services**
    
    Executes the setup script with flag r to configure and launch services details below.

    ```sh
    ./setup -r
    ``` 

5. **Access the Services**

    - **Frontend**: Open your browser and navigate to `http://localhost`
    - **API**: The API will be accessible at `http://localhost:5000`

## Project Structure

The project is organized as follows:

whovians.fr/
│
├── api/
│ ├── Dockerfile
│ ├── package.json
│ ├── server.js
│ └── ... (other API files)
│
├── db/
│ └── whovians.sql
│
├── website/
│ ├── Dockerfile
│ ├── package.json
│ ├── public/
│ ├── src/
│ └── ... (other website files)
│
├── docker-compose.yml
├── setup
├── run
└── README.md

## Docker Configuration

The `docker-compose.yml` file defines the services for the project:

- **db**: MySQL database
- **api**: Node.js and Express API
- **frontend**: React frontend served by Nginx

The services are connected via a custom Docker network `my_app_network` to ensure secure communication between the containers.

## Environment Variables

The environment variables are defined in a `.env` file created by the `setup` script. These variables include:

- `MYSQL_ROOT_PASSWORD`
- `MYSQL_DATABASE`
- `MYSQL_USER`
- `MYSQL_PASSWORD`
- `API_PORT`
- `FRONTEND_PORT`

## Contributing

If you wish to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact us at [your-email@example.com].

---

Enjoy your journey through time and space with Whovians.fr!