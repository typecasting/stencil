import { MEMBER_TYPE } from '../../../../util/constants';
import { getStateDecoratorMeta } from '../stateDecorator';
import * as path from 'path';
import * as ts from 'typescript';
import { gatherMetadata } from './testUtils';

describe('element decorator', () => {

  it('simple decorator', () => {
    let response;
    const sourceFilePath = path.resolve(__dirname, './fixtures/element-example');
    const metadata = gatherMetadata(sourceFilePath, (checker, classNode) => {
      response = getStateDecoratorMeta(classNode);
    });

    expect(response).toEqual({
      el: {
        memberType: MEMBER_TYPE.Element
      }
    });
  });

});
