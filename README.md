# utils

## 安装
npm i z-validator

## 组件接口
为String原生对象附加一个验证器类构造函数，即：String.Validator

### String.Validator原型方法和属性

validator.roNumber (属性)  
validator.roInt (属性)  
validator.roFloat (属性)  
validator.rDoubleByte (属性)  
validator.roDoubleByte (属性)  
validator.rDoubleBytesG (属性)  
validator.rZh (属性)  
validator.roZh (属性)  
validator.roMobileNumber (属性)  
validator.roAreaCode (属性)  
validator.roTelNumber (属性)  
validator.roPostalcode (属性)  
validator.roAreaNumber (属性)  
validator.roIdNumber (属性)  
validator.roBusinessLicenseNumber (属性)  
validator.roOrgCode (属性)  
validator.roEconomicCategoryCode (属性)  
validator.roNationalEconomyIndustryClassificationCode (属性)  
validator.roEmail (属性)  
validator.roUrl (属性)  
validator.roQQNumber (属性)  
validator.roBloodTypeI (属性)  
validator.roHexColorI (属性)  
validator.roDate (属性)  
validator.roMonth (属性)  
validator.roWeek (属性)  
validator.roTime (属性)  
validator.roMd5 (属性)  
validator.oRoUuidIs (属性)  
validator.roKeyboardCharacter (属性)  
validator.isNumber (方法)  
validator.isInt (方法)  
validator.isFloat (方法)  
validator.hasDoubleByte (方法)  
validator.isDoubleByte (方法)  
validator.hasZh (方法)  
validator.isZh (方法)  
validator.isMobileNumber (方法)  
validator.isAreaCode (方法)  
validator.isTelNumber (方法)  
validator.isPostalcode (方法)  
validator.isAreaNumber (方法)  
validator.isIdNumber (方法)  
validator.isBusinessLicenseNumber (方法)  
validator.isOrgCode (方法)  
validator.isEconomicCategoryCode (方法)  
validator.isNationalEconomyIndustryClassificationCode (方法)  
validator.isEmail (方法)  
validator.isUrl (方法)  
validator.isQQNumber (方法)  
validator.isBloodType (方法)  
validator.isHexColor (方法)  
validator.isMd5 (方法)  
validator.isUuid (方法)  
validator.isDate (方法)  
validator.isMonth (方法)  
validator.isWeek (方法)  
validator.isTime (方法)  
validator.getByteLength (方法)  
validator.checkKeyboardCharacterRank (方法)  

### String.Validator静态方法和属性

Validator.roNumber (属性)  
Validator.roInt (属性)  
Validator.roFloat (属性)  
Validator.rDoubleByte (属性)  
Validator.roDoubleByte (属性)  
Validator.rDoubleBytesG (属性)  
Validator.rZh (属性)  
Validator.roZh (属性)  
Validator.roMobileNumber (属性)  
Validator.roAreaCode (属性)  
Validator.roTelNumber (属性)  
Validator.roPostalcode (属性)  
Validator.roAreaNumber (属性)  
Validator.roIdNumber (属性)  
Validator.roBusinessLicenseNumber (属性)  
Validator.roOrgCode (属性)  
Validator.roEconomicCategoryCode (属性)  
Validator.roNationalEconomyIndustryClassificationCode (属性)  
Validator.roEmail (属性)  
Validator.roUrl (属性)  
Validator.roQQNumber (属性)  
Validator.roBloodTypeI (属性)  
Validator.roHexColorI (属性)  
Validator.roDate (属性)  
Validator.roMonth (属性)  
Validator.roWeek (属性)  
Validator.roTime (属性)  
Validator.roMd5 (属性)    
Validator.oRoUuidIs (属性)  
Validator.roKeyboardCharacter (属性)  

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
