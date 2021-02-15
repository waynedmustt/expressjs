describe('Example Test', () => {
    it('Oh! Darling, please to be true', () => {
      const ohDarling = true;  
      expect(ohDarling).toBe(true);
    });

    it('I Love Math so Much!', () => {
        const result = 4;  
        expect(2 + 2).toBe(result);
    });

    it('function test', () => {
        const expectFn = (multiplier) => {
            return 2 * multiplier;
        };
        
        expect(expectFn(5)).toBe(10);
    });

    it('deep object test', () => {
        const result = {
            username: 'dimas',
            address: {
                province: 'Bali',
                regency: 'Buleleng'
            }
        };  
        expect({
            username: 'dimas',
            address: {
                province: 'Bali',
                regency: 'Buleleng'
            }
        }).toEqual(result);
    });
  })