import { makeAutoObservable, runInAction } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { createContext } from 'react';
import sample from './data.json';

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface Location {
  locationID: number;
  name: string;
}

export interface Env {
  envID: number;
  name: string;
}

export interface Server {
  serverID: number;
  name: string;
  locationID: number;
  envID: number;
}

export interface TestLocation {
  id: string;
  location: Partial<Location>;
  environment: Partial<Env>;
  hint?: string;
}

type NewLocationType = { [id: string]: TestLocation };

const getNewTestLocation = (): TestLocation => {
  return { id: uuidv4(), environment: {}, location: {} };
};

const initialTestLocation = getNewTestLocation();

export class Store {
  isLoaded = false;
  locations: Location[] = [];
  envs: Env[] = [];
  servers: Server[] = [];
  testLocations: NewLocationType = { [initialTestLocation.id]: initialTestLocation };

  fetchData = async () => {
    await sleep(1000);

    runInAction(() => {
      this.locations = sample.locations;
      this.envs = sample.envs;
      this.servers = sample.servers;
      this.isLoaded = true;
    });
  };

  addEmptyLocation = () => {
    const newLocation = getNewTestLocation();
    this.testLocations[newLocation.id] = newLocation;
  };

  setTestLocationLocation = (testLocationId: string, location: Location) => {
    this.testLocations[testLocationId].location = location;
    this.testLocations[testLocationId].environment = { envID: undefined };
  };
  setTestLocationEnv = (testLocationId: string, environment: Env) => {
    this.testLocations[testLocationId].environment = environment;
  };
  setTestLocationHint = (testLocationId: string, hint: string) => {
    this.testLocations[testLocationId].hint = hint;
  };

  deleteTestLocation = (testLocationId: string) => {
    delete this.testLocations[testLocationId];
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const store = new Store();
export const storeContext = createContext(store);
