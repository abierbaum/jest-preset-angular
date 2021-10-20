export function decTest(selector: string): Function {
   return function testDec(prototype: Function, name: string): void {
      console.log('kls_ctr: ', prototype.constructor.name, name, selector);
   };
}

/** blah */
export class JestInlineSnapBugComponent {
   @decTest('blah') val3: string = 'val3';
}
export const B = new JestInlineSnapBugComponent();

describe('Jest Snapshot Bug', () => {
   it('should allow snapshots', () => {
      expect('value').toMatchInlineSnapshot();
   });
});
