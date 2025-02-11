import CreateAlertUseCase from "@application/useCases/alerts/CreateAlertUseCase";
import UpdateAlertUseCase from "@application/useCases/alerts/UpdateAlertUseCase";
import FindOneAlertUseCase from "@application/useCases/alerts/FindOneAlertUseCase";
import FindAllAlertUseCase from "@application/useCases/alerts/FindAllAlertUseCase";
import MongooseAlertRepository from "@infrastructure/mongo/repositories/Alert";
export declare const CreateAlertUseCaseProvider: {
    provide: typeof CreateAlertUseCase;
    useFactory: (alertRepository: MongooseAlertRepository) => CreateAlertUseCase;
    inject: (typeof MongooseAlertRepository)[];
};
export declare const UpdateAlertUseCaseProvider: {
    provide: typeof UpdateAlertUseCase;
    useFactory: (alertRepository: MongooseAlertRepository) => UpdateAlertUseCase;
    inject: (typeof MongooseAlertRepository)[];
};
export declare const FindOneAlertUseCaseProvider: {
    provide: typeof FindOneAlertUseCase;
    useFactory: (alertRepository: MongooseAlertRepository) => FindOneAlertUseCase;
    inject: (typeof MongooseAlertRepository)[];
};
export declare const FindAllAlertUseCaseProvider: {
    provide: typeof FindAllAlertUseCase;
    useFactory: (alertRepository: MongooseAlertRepository) => FindAllAlertUseCase;
    inject: (typeof MongooseAlertRepository)[];
};
declare const _default: ({
    provide: typeof CreateAlertUseCase;
    useFactory: (alertRepository: MongooseAlertRepository) => CreateAlertUseCase;
    inject: (typeof MongooseAlertRepository)[];
} | {
    provide: typeof UpdateAlertUseCase;
    useFactory: (alertRepository: MongooseAlertRepository) => UpdateAlertUseCase;
    inject: (typeof MongooseAlertRepository)[];
} | {
    provide: typeof FindOneAlertUseCase;
    useFactory: (alertRepository: MongooseAlertRepository) => FindOneAlertUseCase;
    inject: (typeof MongooseAlertRepository)[];
} | {
    provide: typeof FindAllAlertUseCase;
    useFactory: (alertRepository: MongooseAlertRepository) => FindAllAlertUseCase;
    inject: (typeof MongooseAlertRepository)[];
})[];
export default _default;
