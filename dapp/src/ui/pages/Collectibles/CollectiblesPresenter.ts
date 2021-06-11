import { GetAllCollectibles } from '../../../core/useCases/GetAllCollectibles';

export interface CollectiblesVM {
	url: string;
	title: string;
}

export interface CollectiblesView {
	showCollectibles(collectibles: CollectiblesVM[]);
}

export class CollectiblesPresenter {
	private view: CollectiblesView;
	private getAllCollectibles: GetAllCollectibles;

	constructor(view: CollectiblesView, getAllCollectibles: GetAllCollectibles) {
		this.view = view;
		this.getAllCollectibles = getAllCollectibles;
	}

	start() {
		const collectibles = this.getAllCollectibles.exec();
		this.view.showCollectibles(collectibles);
	}
}