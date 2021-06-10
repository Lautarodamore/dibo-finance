export interface CollectiblesView {
	hiView(): void;
}

export class CollectiblesPresenter {
	private view: CollectiblesView;

	constructor(view: CollectiblesView) {
		this.view = view;
	}

	start() {
		this.view.hiView();
	}
}