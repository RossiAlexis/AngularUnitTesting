import { HeroesComponent } from './heroes.component'
import { of } from 'rxjs';


describe('HeroesComponent', () => {
    let component: HeroesComponent;

    let HEROES;

    let mockHeroeService;

    beforeEach(() => {
        HEROES = [
            {
                id: 1,
                name: 'SpiderDude',
                strength: 8
            },
            {
                id: 2,
                name: 'Wonderful woman',
                strength: 24
            },
            {
                id: 1,
                name: 'SuperDude',
                strength: 55
            }
        ];

        mockHeroeService  = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        component = new HeroesComponent(mockHeroeService);
    });

    describe('delete', () => {
        it('should remove the indicated hero from the heroes list', () => {
            mockHeroeService.deleteHero.and.returnValue(of(true));

            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        });
        xit('should call deleteHero', () => {
            mockHeroeService.deleteHero.and.returnValue(of(true));

            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(mockHeroeService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        });
    });
 


})