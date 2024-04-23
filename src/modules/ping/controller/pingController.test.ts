import { describe, expect, it, beforeEach } from '@jest/globals';
import PingController from './pingController';

describe('PingController', () => {
  let pingController: PingController;

  beforeEach(() => {
    pingController = new PingController();
  });

  describe('getMessage', () => {
    it('should return a message with hello2', async () => {
      const response = await pingController.getMessage();
      expect(response).toEqual({ message: 'hello2' });
    });
  });

  describe('writeMessage', () => {
    it('should return a message with the provided text', async () => {
      const exampleText = 'example';
      const response = await pingController.writeMessage(exampleText);
      expect(response).toEqual({ message: exampleText });
    });
  });
});