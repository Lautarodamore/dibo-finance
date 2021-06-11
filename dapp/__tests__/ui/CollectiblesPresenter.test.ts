import { capture, instance, mock, when } from 'ts-mockito';
import { CollectiblesPresenter, CollectiblesView, CollectiblesVM } from '../../src/ui/pages/Collectibles/CollectiblesPresenter';
import { GetAllCollectibles } from '../../src/core/useCases/GetAllCollectibles';

describe('It should', ()=> {
	test('show all collectibles', () => {
		when(getAllCollectibles.exec()).thenReturn(collectibles);

		presenter.start();

		const model = captureArg<CollectiblesVM>(view.showCollectibles);
		expect(model).toEqual(collectibles);
	});

	function captureArg<T>(method) {
		return capture<T>(method).last()[0];
	}

	 beforeEach(() => {
	 	view = mock<CollectiblesView>();
	 	getAllCollectibles = mock<GetAllCollectibles>();
	 	presenter = new CollectiblesPresenter(instance(view), instance(getAllCollectibles));
	 });

	const collectibles: CollectiblesVM[] = [
		{
			url: 'https://mycollectible.com/stuff',
			title: 'My pretty collectible'
		},
		{
			url: 'https://mycollectible.com/stuff2',
			title: 'My pretty collectible 2'
		}
	];
	let view: CollectiblesView;
	let presenter: CollectiblesPresenter;
	let getAllCollectibles: GetAllCollectibles;
});