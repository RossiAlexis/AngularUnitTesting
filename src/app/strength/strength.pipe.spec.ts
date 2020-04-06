import { StrengthPipe } from "./strength.pipe"



describe('stremgthPipe', () => {
    it('should display weak if strength if 5', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(5)).toEqual('5 (weak)');
    });
    it('should display strong if strength if 10', () => {

        let pipe = new StrengthPipe();

        expect(pipe.transform(10)).toEqual('10 (strong)');
    });
})