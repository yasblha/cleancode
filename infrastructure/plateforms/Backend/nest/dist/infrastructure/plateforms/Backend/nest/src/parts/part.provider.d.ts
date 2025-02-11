import CreatePartUseCase from "@application/useCases/parts/CreatePartUseCase";
import RemovePartUseCase from "@application/useCases/parts/RemovePartUseCase";
import UpdatePartUseCase from "@application/useCases/parts/UpdatePartUseCase";
import FindOnePartUseCase from "@application/useCases/parts/FindOnePartUseCase";
import FindAllPartUseCase from "@application/useCases/parts/FindAllPartUseCase";
import SearchByReferenceUseCase from "@application/useCases/Parts/SearchByReferenceUseCase";
import CreateAlertUseCase from "@application/useCases/alerts/CreateAlertUseCase";
import { SequelizePartsRepository } from "@infrastructure/sequelize/repositories/PartsRepository";
import MongooseAlertRepository from "@infrastructure/mongo/repositories/Alert";
export declare const CreatePartUseCaseProvider: {
    provide: typeof CreatePartUseCase;
    useFactory: (PartRepository: SequelizePartsRepository) => CreatePartUseCase;
    inject: (typeof SequelizePartsRepository)[];
};
export declare const RemovePartUseCaseProvider: {
    provide: typeof RemovePartUseCase;
    useFactory: (PartRepository: SequelizePartsRepository) => RemovePartUseCase;
    inject: (typeof SequelizePartsRepository)[];
};
export declare const UpdatePartUseCaseProvider: {
    provide: typeof UpdatePartUseCase;
    useFactory: (PartRepository: SequelizePartsRepository, CreateAlertUseCase: CreateAlertUseCase) => UpdatePartUseCase;
    inject: (typeof SequelizePartsRepository | typeof CreateAlertUseCase)[];
};
export declare const FindOnePartUseCaseProvider: {
    provide: typeof FindOnePartUseCase;
    useFactory: (PartRepository: SequelizePartsRepository) => FindOnePartUseCase;
    inject: (typeof SequelizePartsRepository)[];
};
export declare const FindAllPartUseCaseProvider: {
    provide: typeof FindAllPartUseCase;
    useFactory: (PartRepository: SequelizePartsRepository) => FindAllPartUseCase;
    inject: (typeof SequelizePartsRepository)[];
};
export declare const SearchByReferenceUseCaseProvider: {
    provide: typeof SearchByReferenceUseCase;
    useFactory: (PartRepository: SequelizePartsRepository) => SearchByReferenceUseCase;
    inject: (typeof SequelizePartsRepository)[];
};
export declare const CreateAlertUseCaseProvider: {
    provide: typeof CreateAlertUseCase;
    useFactory: (alertRepository: MongooseAlertRepository) => CreateAlertUseCase;
    inject: (typeof MongooseAlertRepository)[];
};
declare const _default: (typeof MongooseAlertRepository | {
    provide: typeof CreatePartUseCase;
    useFactory: (PartRepository: SequelizePartsRepository) => CreatePartUseCase;
    inject: (typeof SequelizePartsRepository)[];
} | {
    provide: typeof RemovePartUseCase;
    useFactory: (PartRepository: SequelizePartsRepository) => RemovePartUseCase;
    inject: (typeof SequelizePartsRepository)[];
} | {
    provide: typeof UpdatePartUseCase;
    useFactory: (PartRepository: SequelizePartsRepository, CreateAlertUseCase: CreateAlertUseCase) => UpdatePartUseCase;
    inject: (typeof SequelizePartsRepository | typeof CreateAlertUseCase)[];
} | {
    provide: typeof FindOnePartUseCase;
    useFactory: (PartRepository: SequelizePartsRepository) => FindOnePartUseCase;
    inject: (typeof SequelizePartsRepository)[];
} | {
    provide: typeof FindAllPartUseCase;
    useFactory: (PartRepository: SequelizePartsRepository) => FindAllPartUseCase;
    inject: (typeof SequelizePartsRepository)[];
} | {
    provide: typeof SearchByReferenceUseCase;
    useFactory: (PartRepository: SequelizePartsRepository) => SearchByReferenceUseCase;
    inject: (typeof SequelizePartsRepository)[];
} | {
    provide: typeof CreateAlertUseCase;
    useFactory: (alertRepository: MongooseAlertRepository) => CreateAlertUseCase;
    inject: (typeof MongooseAlertRepository)[];
})[];
export default _default;
