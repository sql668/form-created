import { resolve } from 'path'
import * as semver from "semver"
import { input } from '@inquirer/prompts';
import consola from 'consola'
import chalk from 'chalk'
import type { Project } from '@pnpm/find-workspace-packages'
import { findWorkspacePackages } from '@pnpm/find-workspace-packages'
import { getNpmLatestVersion } from './get-npm';

export const projRoot = resolve(__dirname, '..')
console.log("root", projRoot)
export const getWorkspacePackages = () => {
  return findWorkspacePackages(projRoot)
}



const getVersion = async () => {
  const newVersion = await input({
    message: "请输入版本号",
    required: true,
    validate: function (v) {
      return new Promise((resolve, reject) => {
        setTimeout(function () {
          if (!(!!semver.valid(v))) {
            resolve('请输入合法的版本号');
            return;
          }
          // 校验通过，必须返回true，否则命令行不会继续往下执行
          resolve(true);
          return
        }, 0);
      })
    },
  })
  return newVersion
}

async function main() {
  try {
    // console.log(semver.lt("0.0.0", "0.0.1-beta.6"))
    // console.log( semver.lt("0.0.1", "0.0.1-beta.6"))
    // console.log(semver.lt("0.0.2", "0.0.1-beta.6"))
    const newVersion = await getVersion()
    console.log("version: ", newVersion)
    const lastVersion = await getNpmLatestVersion("@form-created/core")
    console.log("lastVersion: ", lastVersion)
    if (semver.lt(newVersion, lastVersion!)) {
      consola.log(chalk.red('输入的版本号小于当前最新的发布版本号'))
    }

    const pkgs = Object.fromEntries(
      (await getWorkspacePackages()).map((pkg) => [pkg.manifest.name!, pkg])
    )
    const writeVersion = async (project: Project) => {
      await project.writeProjectManifest({
        ...project.manifest,
        version: newVersion,
      } as any)
    }

    for (const pkgName of Object.keys(pkgs)) {
      await writeVersion(pkgs[pkgName])
      consola.success(chalk.green(`${pkgName} 版本号: ${newVersion} 更新成功`))
    }
    consola.success(chalk.green(`版本号: ${newVersion} 更新成功`))
  } catch (error) {
    consola.error(chalk.red(error))
  }

}



main()