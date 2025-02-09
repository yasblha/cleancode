-- Active l’extension pgcrypto pour utiliser gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS pgcrypto;

--------------------------------------------------
-- Création des tables (si elles n'existent pas déjà)
--------------------------------------------------

-- Table users
CREATE TABLE IF NOT EXISTS users (
                                     "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                                     "name" VARCHAR(255) NOT NULL,
                                     "email" VARCHAR(255) UNIQUE NOT NULL,
                                     "password" VARCHAR(255) NOT NULL,
                                     "roles" VARCHAR(255) NOT NULL,
                                     "isActive" BOOLEAN DEFAULT true,
                                     "isEmailVerified" BOOLEAN DEFAULT false,
                                     "createdAt" TIMESTAMP DEFAULT NOW(),
                                     "updatedAt" TIMESTAMP
);

-- Table bikes (la clé primaire est la colonne "vin")
CREATE TABLE IF NOT EXISTS bikes (
                                     "vin" VARCHAR(17) PRIMARY KEY,
                                     "brand" VARCHAR(255) NOT NULL,
                                     "model" VARCHAR(255) NOT NULL,
                                     "mileage" INT NOT NULL,
                                     "registrationNumber" VARCHAR(50) UNIQUE NOT NULL,
                                     "purchaseDate" DATE NOT NULL,
                                     "warrantyExpirationDate" DATE,
                                     "ownerId" UUID NOT NULL REFERENCES users("id") ON DELETE CASCADE,
                                     "isActive" BOOLEAN DEFAULT true,
                                     "isInMaintenance" BOOLEAN DEFAULT false,
                                     "isDecommissioned" BOOLEAN DEFAULT false,
                                     "nextMaintenanceMileage" INT,
                                     "nextMaintenanceDate" DATE,
                                     "createdAt" TIMESTAMP DEFAULT NOW(),
                                     "updatedAt" TIMESTAMP
);

-- Table incidents
CREATE TABLE IF NOT EXISTS incidents (
                                         "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                                         "bikeId" VARCHAR(17) NOT NULL REFERENCES bikes("vin") ON DELETE CASCADE,
                                         "date" TIMESTAMP NOT NULL,
                                         "description" TEXT NOT NULL,
                                         "isResolved" BOOLEAN DEFAULT false
);

-- Table maintenance_services
CREATE TABLE IF NOT EXISTS maintenance_services (
                                                    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                                                    "bikeId" VARCHAR(17) NOT NULL REFERENCES bikes("vin") ON DELETE CASCADE,
                                                    "date" TIMESTAMP NOT NULL,
                                                    "description" TEXT NOT NULL,
                                                    "type" VARCHAR(50) NOT NULL CHECK ("type" IN ('preventive', 'curative')),
                                                    "isResolved" BOOLEAN DEFAULT false,
                                                    "cost" NUMERIC(10,2) DEFAULT 0,
                                                    "partsUsed" JSONB,
                                                    "technicianId" UUID REFERENCES users("id"),
                                                    "createdAt" TIMESTAMP DEFAULT NOW(),
                                                    "updatedAt" TIMESTAMP
);

-- Table parts
CREATE TABLE IF NOT EXISTS parts (
                                     "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                                     "name" VARCHAR(255) NOT NULL,
                                     "description" TEXT,
                                     "stockQuantity" INT DEFAULT 0,
                                     "minStockLevel" INT DEFAULT 1,
                                     "price" NUMERIC(10,2) NOT NULL,
                                     "createdAt" TIMESTAMP DEFAULT NOW(),
                                     "updatedAt" TIMESTAMP
);

-- Table de jointure entre bikes et parts (relation many-to-many)
CREATE TABLE IF NOT EXISTS bike_parts (
                                          "bikeVin" VARCHAR(17) NOT NULL REFERENCES bikes("vin") ON DELETE CASCADE,
                                          "partId" UUID NOT NULL REFERENCES parts("id") ON DELETE CASCADE,
                                          PRIMARY KEY ("bikeVin", "partId")
);

-- Table de jointure entre maintenance_services et parts (relation many-to-many)
CREATE TABLE IF NOT EXISTS maintenance_service_parts (
                                                         "maintenanceServiceId" UUID NOT NULL REFERENCES maintenance_services("id") ON DELETE CASCADE,
                                                         "partId" UUID NOT NULL REFERENCES parts("id") ON DELETE CASCADE,
                                                         PRIMARY KEY ("maintenanceServiceId", "partId")
);

COMMIT;
