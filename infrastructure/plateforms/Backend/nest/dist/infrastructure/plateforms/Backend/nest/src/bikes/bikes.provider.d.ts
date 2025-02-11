import CreateBikeUseCase from "@application/useCases/bikes/CreateBikeUseCase";
import RemoveBikeUseCase from "@application/useCases/bikes/RemoveBikeUseCase";
import UpdateBikeUseCase from "@application/useCases/bikes/UpdateBikeUseCase";
import FindOneBikeUseCase from "@application/useCases/bikes/FindOneBikeUseCase";
import FindAllBikeUseCase from "@application/useCases/bikes/FindAllBikeUseCase";
import { SequelizeBikesRepository } from "@infrastructure/sequelize/repositories/BikesRepository";
export declare const CreateBikeUseCaseProvider: {
    provide: typeof CreateBikeUseCase;
    useFactory: (bikeRepository: SequelizeBikesRepository) => CreateBikeUseCase;
    inject: (typeof SequelizeBikesRepository)[];
};
export declare const RemoveBikeUseCaseProvider: {
    provide: typeof RemoveBikeUseCase;
    useFactory: (bikeRepository: SequelizeBikesRepository) => RemoveBikeUseCase;
    inject: (typeof SequelizeBikesRepository)[];
};
export declare const UpdateBikeUseCaseProvider: {
    provide: typeof UpdateBikeUseCase;
    useFactory: (bikeRepository: SequelizeBikesRepository) => UpdateBikeUseCase;
    inject: (typeof SequelizeBikesRepository)[];
};
export declare const FindOneBikeUseCaseProvider: {
    provide: typeof FindOneBikeUseCase;
    useFactory: (bikeRepository: SequelizeBikesRepository) => FindOneBikeUseCase;
    inject: (typeof SequelizeBikesRepository)[];
};
export declare const FindAllBikeUseCaseProvider: {
    provide: typeof FindAllBikeUseCase;
    useFactory: (bikeRepository: SequelizeBikesRepository) => FindAllBikeUseCase;
    inject: (typeof SequelizeBikesRepository)[];
};
declare const _default: ({
    provide: typeof CreateBikeUseCase;
    useFactory: (bikeRepository: SequelizeBikesRepository) => CreateBikeUseCase;
    inject: (typeof SequelizeBikesRepository)[];
} | {
    provide: typeof RemoveBikeUseCase;
    useFactory: (bikeRepository: SequelizeBikesRepository) => RemoveBikeUseCase;
    inject: (typeof SequelizeBikesRepository)[];
} | {
    provide: typeof UpdateBikeUseCase;
    useFactory: (bikeRepository: SequelizeBikesRepository) => UpdateBikeUseCase;
    inject: (typeof SequelizeBikesRepository)[];
} | {
    provide: typeof FindOneBikeUseCase;
    useFactory: (bikeRepository: SequelizeBikesRepository) => FindOneBikeUseCase;
    inject: (typeof SequelizeBikesRepository)[];
} | {
    provide: typeof FindAllBikeUseCase;
    useFactory: (bikeRepository: SequelizeBikesRepository) => FindAllBikeUseCase;
    inject: (typeof SequelizeBikesRepository)[];
})[];
export default _default;
