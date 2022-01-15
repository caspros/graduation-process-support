# graduation-process-support
Graduation process support app - group project for studies [PSI]


## How to run - backend
Run mysql instance with database named ```dyplomowanie_db```.

Setup your database credentials into ```applicaiton.properties```

```
mvn clean install
mvn install -DskipTests
```

Backend url: ``` http://localhost:8080/ ```

## How to run - frontend

```
cd graduation-process-frontend
npm install
ng serve
```

Frontend url: ``` http://localhost:4200/ ```
