FROM postgres:16-alpine
ENV POSTGRES_DB=three_tier
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
COPY init.sql /docker-entrypoint-initdb.d/
EXPOSE 5432
