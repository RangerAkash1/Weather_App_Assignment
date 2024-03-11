1. make virtual environment
2. activate environment
3. set up postgres and make db with dbname wriiten in .env
4. make .env file and add below variables

DB_USERNAME=postgres
DB_NAME=WeatherAPP
DB_HOST=localhost
DB_PASSWORD=postgres
DB_PORT=5432
WEATHER_API_KEY=192e3aaf21ff4c0eaab95337240503

5. install all packages in stored req.txt "pip install -r req.txt"
6. install frontend packages "npm i"
7. run frontend "npm run dev"
8. run backend
   "python manage.py makemigrations"
   "python manage.py migrate"
   "python manage.py runserver"
