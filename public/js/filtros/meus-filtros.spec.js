describe('meusFiltros tests', function(){
    beforeEach(module('meusFiltros'));
    it('deve tornar uma string maiúscula', 
       inject(function(maiusculoFilter){
            expect(maiusculoFilter('lobo')).toBe('LOBO');
            expect(maiusculoFilter('Pão de Açúcar')).not.toBe('PAO DE ACUCAR');
        })
    );
});