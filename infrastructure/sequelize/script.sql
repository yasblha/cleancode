ALTER TABLE bikes
    ADD CONSTRAINT "fk_bikes_ownerId"
        FOREIGN KEY ("ownerId") REFERENCES users ("id");

ALTER TABLE incidents
    ADD CONSTRAINT "fk_incidents_bikeId"
        FOREIGN KEY ("bikeId") REFERENCES bikes ("id");

ALTER TABLE maintenance_services
    ADD CONSTRAINT "fk_maintenanceServices_bikeId"
        FOREIGN KEY ("bikeId") REFERENCES bikes ("id");

ALTER TABLE maintenance_services
    ADD CONSTRAINT "fk_maintenanceServices_technicianId"
        FOREIGN KEY ("technicianId") REFERENCES users ("id");

ALTER TABLE bikesparts
    ADD CONSTRAINT "fk_bikeParts_bikeId"
        FOREIGN KEY ("bikeId") REFERENCES bikes ("id");

ALTER TABLE bikesparts
    ADD CONSTRAINT "fk_bikeParts_partId"
        FOREIGN KEY ("partId") REFERENCES parts ("id");

ALTER TABLE maintenanceserviceparts
    ADD CONSTRAINT "fk_maintenanceServiceParts_msId"
        FOREIGN KEY ("maintenanceServiceId") REFERENCES maintenance_services ("id");

ALTER TABLE maintenanceserviceparts
    ADD CONSTRAINT "fk_maintenanceServiceParts_partId"
        FOREIGN KEY ("partId") REFERENCES parts ("id");