import { Router } from 'express';
import multer from 'multer';

// import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import createCategoryController from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
// import { CreateCategoryService } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase';

// import { categoriesRoutes } from './categories.routes';
// import { specificationsRoutes } from './specifications.routes';

const categoriesRoutes = Router();
// const categoriesRepository = CategoriesRepository.getInstance();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController().handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  const all = listCategoriesController.handle(request, response);

  return response.json(all);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
