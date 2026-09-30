---
title: "为天气札记申请和风天气凭证"
description: "注册和风天气、创建项目并把自己的 API Host 与 API Key 填入 OwlPost。"
date: "2026-10-01"
order: 6
slug: "qweather"
source: "https://guides.yuyanjia.top/guides/qweather/"
---

:::success

天气札记使用你自己的和风天气账号。OwlPost 不共用站点天气 Key，也不承诺永久免费；额度、费用和接口权限以和风天气控制台显示为准。

:::

## 第一步：注册和风天气

1. 打开➡️ [和风天气控制台](https://console.qweather.com/)。
2. 没有账号就点“注册”，按页面提示完成注册；已有账号就点“登录”。
3. 登录后，点击左侧 **项目管理**。
4. 点击右上角 **创建项目**。
5. 在“项目名称”填 `OwlPost 天气`，点击 **保存**。
6. 在项目列表里点击刚才创建的项目名称。

![和风天气项目页面实机截图](/assets/qweather/step-01-project.jpg)

## 第二步：生成 API KEY

1. 在项目页面找到 **凭据** 或 **凭据设置**。
2. 点击凭据区域右侧的 **创建凭据**。

![和风天气选择 API KEY 后的实机截图](/assets/qweather/step-02-api-key.jpg)

进入“创建凭据”页面后，按下面填写：

1. 在 **凭据名称**（页面可能显示“账户名称”）输入 `OwlPost 天气`。
2. 在 **身份认证方式** 点击右侧的 **API KEY**（页面可能显示“API密钥”）圆圈。
3. 在 **选择启用的 API** 保持 **启用全部 API**。
4. 点击左下角蓝色 **保存**。

保存后复制 API KEY：

1. 回到 **项目管理**，点击刚才的项目。
2. 在凭据列表点击刚创建的 **OwlPost 天气**。
3. 找到 **API KEY**，点击旁边的复制按钮；页面可能显示为 **API密钥**。
4. 把复制出的内容留好，下一步填入 OwlPost。

不要把 API KEY 填到 API Host 输入框。

认证方式可参考➡️ [和风天气认证说明](https://dev.qweather.com/docs/configuration/authentication/)。

## 第三步：取得 API Host

1. 点击控制台左侧 **设置**。
2. 找到 **API Host**（页面可能写成 **API主机**）。
3. 点击 API Host 右侧的复制图标。

![和风天气设置页面 API Host 实机截图](/assets/qweather/step-03-api-host.jpg)

复制出的内容只保留完整域名，例如：

```text
h2a9cf3mhs.xy.qweatherapi.com
```

不要复制下面这些内容：

- `https://` 开头的完整网址；
- `/v7/weather/now` 这类接口路径；
- 端口号、用户名或 API KEY；
- 公共地址 `api.qweather.com`、`devapi.qweather.com` 或 `geoapi.qweather.com`。

Host 规则可参考➡️ [和风天气 API Host 说明](https://dev.qweather.com/docs/configuration/api-host/)。

## 第四步：填入 OwlPost

回到 OwlPost，打开 **设置 → MCP → 和风天气**：

1. 把项目里的专属域名填入 **API Host**；
2. 把刚生成的 **API KEY** 填入 **API Key**；
3. 点击 **保存 MCP 设置**；
4. 再到天气札记里选择参照城市。

## 在哪里查看额度和费用

登录和风天气控制台后，进入项目或账户的用量、套餐、账单页面查看请求量、剩余额度和费用。不同套餐的页面名称与计费方式可能调整，请以控制台当前显示为准。OwlPost 不承诺永久免费，也不会代替你充值或处理账单。

## 常见问题

### Host 填错

请重新从项目的 API Host 页面复制专属域名，只保留 `qweatherapi.com` 域名，不要填写 `api.qweather.com`、完整接口路径或带端口的地址。

### Key 无效或没有权限

确认 Key 没有多余空格、引号或换行，并确认它属于当前项目。若项目没有开通所需 API 产品，请在和风天气控制台补充权限后再保存。

### 个人额度不足

天气页面会提示个人额度不足。请到和风天气控制台查看用量或套餐，按官方页面充值、升级或等待额度恢复；OwlPost 不会改用其他人的凭证。

### 查询频繁或临时网络失败

请稍后再试。短暂失败时，天气札记只会显示同一账号、同一凭证和同一城市范围内仍然有效的旧天气；更换账号、凭证或城市不会沿用另一份缓存。

:::success

完成后，回到天气札记选择城市。

:::

