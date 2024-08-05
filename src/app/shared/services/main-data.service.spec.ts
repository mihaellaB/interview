import { MainDataService } from './main-data.service';

describe('MainDataService', () => {
  let service: MainDataService;

  beforeEach(() => {
    service = new MainDataService();
  });

  it('should get users', () => {
    spyOn(service as any, 'getUserNames').and.callThrough();
    spyOn(service as any, 'getUserTypes').and.callThrough();
    spyOn(service as any, 'getUserPics').and.callThrough();
    service.getMainData().subscribe(() => {
      expect(service['getUserNames']).toHaveBeenCalled();
      expect(service['getUserTypes']).toHaveBeenCalled();
      expect(service['getUserPics']).toHaveBeenCalled();
    });
  });
});
