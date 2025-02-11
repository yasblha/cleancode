import { Module } from "@nestjs/common";
import { BikesModule } from "./bikes/bikes.module";
import { UsersModule } from "./users/users.module";
import { IncidentsModule } from "./incidents/incidents.module";
import { CompaniesModule } from "./company/companies.module";
import { AlertsModule } from "./alerts/alerts.module";
import { PartsModule } from "./parts/parts.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    BikesModule,
    UsersModule,
    IncidentsModule,
    PartsModule,
    CompaniesModule,
    AlertsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
