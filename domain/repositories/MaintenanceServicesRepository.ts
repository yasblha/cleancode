import { MaintenanceServices } from '../entities/MaintainanceServices';

export interface MaintenanceServicesRepository {
    create(service: MaintenanceServices): Promise<MaintenanceServices>;
    findAll(): Promise<MaintenanceServices[]>;
    findOne(id: string): Promise<MaintenanceServices | null>;
    update(id: string, service: Partial<MaintenanceServices>): Promise<MaintenanceServices | null>;
    remove(id: string): Promise<boolean>;
    findByBikeId(bikeId: string): Promise<MaintenanceServices[]>;
    findByTechnicianId(technicianId: string): Promise<MaintenanceServices[]>;
    //findByServiceId(serviceId: string): Promise<MaintenanceServices | null>;
    //findByServiceName(serviceName: string): Promise<MaintenanceServices | null>;
    //findByServiceType(serviceType: string): Promise<MaintenanceServices[]>;
    //findByServiceStatus(serviceStatus: string): Promise<MaintenanceServices[]>;
    //findByServiceDate(serviceDate: Date): Promise<MaintenanceServices[]>;
    //findByServiceTime(serviceTime: string): Promise<MaintenanceServices[]>;
    //findByServiceDuration(serviceDuration: string): Promise<MaintenanceServices[]>;
    //findByServiceCost(serviceCost: number): Promise<MaintenanceServices[]>;
}