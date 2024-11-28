import axios from "axios"
import urlJoin from "url-join"
import * as semver from "semver"

function getDefaultRegistry(isOriginal = true) {
  return isOriginal ? 'https://registry.npmjs.org' : "http://registry.npmmirror.com"
}

function getNpmInfo(npmName, registry?: string) {
  if (!npmName) {
    return null;
  }
  const registryUrl = registry || getDefaultRegistry();
  const npmInfoUrl = urlJoin(registryUrl, npmName);
  return axios.get(npmInfoUrl).then(response => {
    if (response.status === 200) {
      return response.data;
    }
    return null;
  }).catch(err => {
    return Promise.reject(err);
  });
}

async function getNpmVersions(npmName, registry?: string) {
  const data = await getNpmInfo(npmName, registry);
  if (data) {
    return Object.keys(data.versions);
  } else {
    return [];
  }
}

function getSemverVersions(baseVersion, versions) {
  return versions
    .filter(version => semver.satisfies(version, `>${baseVersion}`))
    .sort((a, b) => semver.gt(b, a) ? 1 : -1);
}

async function getNpmSemverVersion(baseVersion, npmName, registry?: string) {
  const versions = await getNpmVersions(npmName, registry);
  const newVersions = getSemverVersions(baseVersion, versions);
  if (newVersions && newVersions.length > 0) {
    return newVersions[0];
  }
  return null;
}
async function getNpmLatestVersion(npmName, registry?: string) {
  let versions = await getNpmVersions(npmName, registry);
  //console.log("排序前:",versions)
  if (versions) {
    // 降序排序
    versions.sort((a, b) => {
      if (semver.lt(b, a)) {
        return -1;
      } else {
        return 1;
      }
    });
    return versions[0]
  }
  return null;
}

export {
  getNpmInfo,
  getNpmVersions,
  getNpmSemverVersion,
  getDefaultRegistry,
  getNpmLatestVersion
}