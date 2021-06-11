import { CollectiblesPresenter, CollectiblesView } from '../pages/Collectibles/CollectiblesPresenter';
import { GetAllCollectibles } from '../../core/useCases/GetAllCollectibles';

export class PresenterFactory {
	getAllCollectibles = new GetAllCollectibles();

	collectibles(view: CollectiblesView): CollectiblesPresenter {
		return new CollectiblesPresenter(view, this.getAllCollectibles);
	}
}
