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

打开➡️ [和风天气控制台](https://console.qweather.com/)，注册或登录自己的账号。进入后打开项目管理，创建一个项目，并按页面提示选择天气 API 产品。

## 第二步：生成 API KEY

下面的图是“照着找按钮”的示例页面，项目名、凭据名和 Key 都是假数据。和风天气改版后按钮文字可能略有变化，但要找的仍然是 **项目管理 → 你的项目 → 凭据/凭据设置 → 创建凭据**。

![在和风天气控制台创建 API KEY 的示例图](/assets/qweather/step-02-create-api-key.svg)

按图操作：

1. 点击左侧 **项目管理**，再点击你刚创建的项目名称。
2. 打开 **凭据** 或 **凭据设置**，点击右上角 **创建凭据**。
3. 在“凭据名称”输入一个你能认出来的名字，例如 `OwlPost weather demo`。这只是备注，不是 API Key。
4. 在“身份认证方式”下拉框选择 **API KEY**，然后点击 **创建**。
5. 创建成功后，点击复制按钮复制完整的 API KEY，马上保存到自己的密码管理器。创建页面可能只完整展示一次。

这一页只有两项需要注意：

| 页面上的位置 | 应该怎么填 |
| --- | --- |
| 凭据名称 | 任意好认的备注，例如 `OwlPost weather demo` |
| 身份认证方式 | 选择 **API KEY**，不要选成 JWT |

复制出来的 Key 不要发进聊天、截图或教程评论，也不要把 Key 填到 API Host 输入框。

认证方式可参考➡️ [和风天气认证说明](https://dev.qweather.com/docs/configuration/authentication/)。

## 第三步：取得 API Host

API Host 是账号专属的域名，不是项目里随便填写的一句话。回到控制台后，点击左侧 **设置**，找到 **API Host**（有些页面会写成 API 地址），再点击右侧 **复制**。

![在和风天气控制台查找 API Host 的示例图](/assets/qweather/step-03-find-api-host.svg)

复制时只保留完整域名，例如：

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

没有填好凭证时，天气札记不会自动发起查询。凭证保存后会跟随你的云存档恢复，不会写进聊天、人物资料或冥想盆导出。

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

完成后，你可以回到天气札记选择城市。天气只作为窗口外的一片现实天色，不会改变角色的身份或故事设定。

:::

