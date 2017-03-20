# utils

## 安装
npm i z-validator

## 组件接口
为String原生对象及原型附加属性和方法

### String原型方法和属性

string.rAbsPathI (属性)
string.rURLAbsPathI (属性)
string.rFileAbsPathI (属性)
string.rProtocol (属性)
string.roNumber (属性)
string.roInt (属性)  
string.roFloat (属性)  
string.rDoubleByte (属性)  
string.roDoubleByte (属性)  
string.rDoubleBytesG (属性)  
string.rZh (属性)  
string.roZh (属性)  
string.roMobileNumber (属性)  
string.roAreaCode (属性)  
string.roTelNumber (属性)  
string.roPostalcode (属性)  
string.roAreaNumber (属性)  
string.roIdNumber (属性)  
string.roBusinessLicenseNumber (属性)  
string.roOrgCode (属性)  
string.roEconomicCategoryCode (属性)  
string.roNationalEconomyIndustryClassificationCode (属性)  
string.roEmail (属性)  
string.roURLCharacter (属性)
string.roQQNumber (属性)  
string.roBloodTypeI (属性)  
string.roHexColorI (属性)  
string.roDate (属性)  
string.roMonth (属性)  
string.roWeek (属性)  
string.roTime (属性)  
string.roMd5 (属性)  
string.oRoUuidIs (属性)  
string.roKeyboardCharacter (属性)  
string.isNumber (方法)  
string.isInt (方法)  
string.isFloat (方法)  
string.hasDoubleByte (方法)  
string.isDoubleByte (方法)  
string.hasZh (方法)  
string.isZh (方法)  
string.isMobileNumber (方法)  
string.isAreaCode (方法)  
string.isTelNumber (方法)  
string.isPostalcode (方法)  
string.isAreaNumber (方法)  
string.isIdNumber (方法)  
string.isBusinessLicenseNumber (方法)  
string.isOrgCode (方法)  
string.isEconomicCategoryCode (方法)  
string.isNationalEconomyIndustryClassificationCode (方法)  
string.isEmail (方法)  
string.isURL (方法)
string.isFileAbsPath (方法)
string.isAbsPath (方法)
string.getProtocol (方法)
string.isQQNumber (方法)  
string.isBloodType (方法)  
string.isHexColor (方法)  
string.isMd5 (方法)  
string.isUuid (方法)  
string.isDate (方法)  
string.isMonth (方法)  
string.isWeek (方法)  
string.isTime (方法)  
string.getByteLength (方法)  
string.checkKeyboardCharacterRank (方法)  

### String静态方法和属性

String.rAbsPathI (属性)
String.rURLAbsPathI (属性)
String.rFileAbsPathI (属性)
String.rProtocol (属性)
String.roNumber (属性)  
String.roInt (属性)  
String.roFloat (属性)  
String.rDoubleByte (属性)  
String.roDoubleByte (属性)  
String.rDoubleBytesG (属性)  
String.rZh (属性)  
String.roZh (属性)  
String.roMobileNumber (属性)  
String.roAreaCode (属性)  
String.roTelNumber (属性)  
String.roPostalcode (属性)  
String.roAreaNumber (属性)  
String.roIdNumber (属性)  
String.roBusinessLicenseNumber (属性)  
String.roOrgCode (属性)  
String.roEconomicCategoryCode (属性)  
String.roNationalEconomyIndustryClassificationCode (属性)  
String.roEmail (属性)  
String.roUrl (属性)  
String.roQQNumber (属性)  
String.roBloodTypeI (属性)  
String.roHexColorI (属性)  
String.roDate (属性)  
String.roMonth (属性)  
String.roWeek (属性)  
String.roTime (属性)  
String.roMd5 (属性)    
String.oRoUuidIs (属性)  
String.roKeyboardCharacter (属性)  

## 组件构建

### 从配置文件构建（rollup.config.js）
npm run build // rollup -c

或者：

### 自定义构建
npm run dev // node rollup

### 文档生成
npm install -global esdoc
echo '{"source": "./src", "destination": "./doc"}' > .esdoc.json
esdoc
#### 文档
doc/index.html

或者：

### dox
[https://github.com/tj/dox](https://github.com/tj/dox)
