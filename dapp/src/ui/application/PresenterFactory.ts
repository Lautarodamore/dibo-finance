import { CollectiblesPresenter, CollectiblesView } from '../pages/Collectibles/CollectiblesPresenter';

export class PresenterFactory {
	collectibles(view: CollectiblesView): CollectiblesPresenter {
		return new CollectiblesPresenter(view);
	}
}
