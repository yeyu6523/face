const fs = require('fs');
const path = require('path');

// 修复 capacitor build.gradle
const capacitorBuildGradle = path.join('node_modules', '@capacitor', 'android', 'capacitor', 'build.gradle');
if (fs.existsSync(capacitorBuildGradle)) {
    let content = fs.readFileSync(capacitorBuildGradle, 'utf8');
    if (!content.includes('namespace')) {
        content = content.replace(
            /android\s*{/,
            `android {
    namespace 'com.capacitorjs.android'`
        );
        fs.writeFileSync(capacitorBuildGradle, content);
        console.log('Fixed capacitor build.gradle');
    }
}

// 修复 app build.gradle
const appBuildGradle = path.join('android', 'app', 'build.gradle');
if (fs.existsSync(appBuildGradle)) {
    let content = fs.readFileSync(appBuildGradle, 'utf8');
    if (!content.includes('namespace')) {
        content = content.replace(
            /android\s*{/,
            `android {
    namespace 'com.example.faceapp'`
        );
        fs.writeFileSync(appBuildGradle, content);
        console.log('Fixed app build.gradle');
    }
}