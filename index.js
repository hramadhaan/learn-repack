/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Script, ScriptManager, Federated} from '@callstack/repack/client';

const resolveURL = Federated.createURLResolver({
  containers: {
    app1: 'https://hanifstorage.sgp1.digitaloceanspaces.com/[name][ext]',
  },
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  console.log('script: ', {scriptId, caller});
  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  console.log('URL HANIF: ', url)

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false, // For development
  };
});

AppRegistry.registerComponent(appName, () => App);
