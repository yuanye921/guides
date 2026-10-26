---
title: "预言家云酒馆 · 新手入门"
description: "从注册、连接 API 到导入角色，带你开始第一段故事。"
date: "2026-10-25"
order: 2
slug: "yuyanjia-tavern"
eyebrow: "Yuyanjia Cloud Tavern · Start here"
---

<div class="tavern-opening">
  <p class="tavern-kicker">推门入座，从这里开始</p>
  <p class="tavern-lead">把麻烦留给那头驴，<br />你只管推门入座。</p>
  <a class="tavern-entry" href="https://jiuguan.yuyanjia.top/" target="_blank" rel="noopener noreferrer">打开预言家云酒馆 ↗</a>
</div>

<nav class="tavern-route" aria-label="入门路线">
  <a href="#注册与激活"><b>01</b><span>注册与激活</span></a>
  <a href="#连接-api"><b>02</b><span>连接 API</span></a>
  <a href="#导入角色与配套文件"><b>03</b><span>导入角色</span></a>
  <a href="#开始第一段故事"><b>04</b><span>开始聊天</span></a>
</nav>

:::info
**只想找某个按钮？** 直接看 [面板详解](/guides/yuyanjia-tavern-panels/)。所有配图均为程序真实截图；涉及账号的图片使用演示账号。点击图片可放大查看箭头标注。
:::

## 先分清这两件事

<div class="tavern-compare">
  <section><span>酒馆会员</span><strong>你的房间</strong><p>用来进入云酒馆、保存角色与聊天，在手机和电脑之间继续故事。</p><small>在酒馆账号页兑换「激活或续费卡密」。</small></section>
  <section><span>AI 接口与额度</span><strong>与你对戏的人</strong><p>AI 负责生成回复，需要你自己的 API 密钥与可用额度。</p><small>密钥填写在插头图标里的「自定义 API 密钥」。</small></section>
</div>

[API 账号充值](https://shop.yuyanjia.top/buy/26) · [直接购买密钥](https://shop.yuyanjia.top/buy/25) · [密钥余额查询](https://balance-checker.yuyanjia.top)

**酒馆会员不包含 AI 额度；给 API 充值也不会延长酒馆会员。** 酒馆账号与 API 站账号分别注册。购买时先核对商品名称，会员卡密、API 充值码和 API 密钥不能混着填。

:::danger
**重要声明** · 本平台仅供个人写作提供创意和灵感，请勿使用 AI 生成任何法律禁止内容！
:::

## 注册与激活

### 1. 注册后，先去邮箱收信

1. 打开 [酒馆账号页](https://jiuguan.yuyanjia.top/cloud)，点击 **注册账号**。
2. 填写用户名、邮箱和密码。用户名为 **3–32 位字母、数字、下划线或短横线**；密码至少 **10 位**。
3. 收到验证邮件后，点击邮件中的验证按钮，再在打开的页面点击 **完成验证**。
4. 返回登录页，用用户名或邮箱登录。

<figure class="tavern-shot tavern-shot-narrow"><button class="guide-shot-open" type="button" aria-haspopup="dialog" aria-label="放大查看标注：注册表单：用户名、邮箱、密码，以及重发验证邮件入口"><span class="guide-shot-stage" style="aspect-ratio:490/675;--shot-width:490px;--shot-top:0%"><img src="/assets/yuyanjia-tavern/register.webp" alt="注册表单：用户名、邮箱、密码，以及重发验证邮件入口" width="490" height="675" loading="lazy" /><svg class="guide-shot-overlay" viewBox="0 0 490 675" aria-hidden="true"><defs><marker id="shot-arrow-yuyanjia-tavern-1" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M1 1L10 6L1 11" fill="none" stroke="#ff695e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></marker></defs><g transform="translate(0 0)"><g><title>填写完用户名、邮箱和密码，点击「注册」。</title><rect class="guide-callout-target" x="65" y="443" width="361" height="55" rx="4"/><path class="guide-callout-arrow" d="M462 470 L430 470.1" marker-end="url(#shot-arrow-yuyanjia-tavern-1)"/><circle class="guide-callout-badge" cx="476" cy="470" r="14"/><text class="guide-callout-number" x="476" y="470" font-size="19">1</text></g><g><title>没收到验证邮件时，使用「重发验证邮件」。</title><rect class="guide-callout-target" x="237" y="526" width="86" height="25" rx="4"/><path class="guide-callout-arrow" d="M338.8 572.1 L308.9 555" marker-end="url(#shot-arrow-yuyanjia-tavern-1)"/><circle class="guide-callout-badge" cx="351" cy="579" r="14"/><text class="guide-callout-number" x="351" y="579" font-size="19">2</text></g></g></svg></span><span class="guide-shot-open-label">放大查看标注 ↗</span></button><ol class="guide-shot-legend"><li><b aria-hidden="true">1</b><span>填写完用户名、邮箱和密码，点击「注册」。</span></li><li><b aria-hidden="true">2</b><span>没收到验证邮件时，使用「重发验证邮件」。</span></li></ol><figcaption>真实注册表单，摄于隔离演示环境。正式站若显示「暂未开放注册」，请等待开放通知。</figcaption></figure>

:::warning
**注册也需要邮箱验证，不只是找回密码。** 验证链接有效期为 **30 分钟**。没收到时先看垃圾邮件，再用「重发验证邮件」重新发送；以最新邮件为准。
:::

### 2. 兑换酒馆会员卡密

先 [购买会员卡密](https://shop.yuyanjia.top/buy/30)，再进入 [账号页](https://jiuguan.yuyanjia.top/cloud)，把酒馆会员卡密粘贴到 **激活或续费卡密**，点击 **兑换卡密**。看到会员有效、有效期更新后，点击 **进入酒馆**。

<figure class="tavern-shot tavern-shot-narrow"><button class="guide-shot-open" type="button" aria-haspopup="dialog" aria-label="放大查看标注：演示账号的会员状态、有效期和激活或续费卡密输入框"><span class="guide-shot-stage" style="aspect-ratio:490/671;--shot-width:490px;--shot-top:0%"><img src="/assets/yuyanjia-tavern/membership.webp" alt="演示账号的会员状态、有效期和激活或续费卡密输入框" width="490" height="671" loading="lazy" /><svg class="guide-shot-overlay" viewBox="0 0 490 671" aria-hidden="true"><defs><marker id="shot-arrow-yuyanjia-tavern-2" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M1 1L10 6L1 11" fill="none" stroke="#ff695e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></marker></defs><g transform="translate(0 0)"><g><title>在这里粘贴酒馆会员卡密。</title><rect class="guide-callout-target" x="65" y="374" width="361" height="50" rx="4"/><path class="guide-callout-arrow" d="M462 399 L430 399" marker-end="url(#shot-arrow-yuyanjia-tavern-2)"/><circle class="guide-callout-badge" cx="476" cy="399" r="14"/><text class="guide-callout-number" x="476" y="399" font-size="19">1</text></g><g><title>点击「兑换卡密」，确认会员有效期更新。</title><rect class="guide-callout-target" x="65" y="440" width="361" height="54" rx="4"/><path class="guide-callout-arrow" d="M462 467 L430 467" marker-end="url(#shot-arrow-yuyanjia-tavern-2)"/><circle class="guide-callout-badge" cx="476" cy="467" r="14"/><text class="guide-callout-number" x="476" y="467" font-size="19">2</text></g><g><title>会员有效后，点击「进入酒馆」。</title><rect class="guide-callout-target" x="65" y="296" width="361" height="55" rx="4"/><path class="guide-callout-arrow" d="M462 323 L430 323.1" marker-end="url(#shot-arrow-yuyanjia-tavern-2)"/><circle class="guide-callout-badge" cx="476" cy="323" r="14"/><text class="guide-callout-number" x="476" y="323" font-size="19">3</text></g></g></svg></span><span class="guide-shot-open-label">放大查看标注 ↗</span></button><ol class="guide-shot-legend"><li><b aria-hidden="true">1</b><span>在这里粘贴酒馆会员卡密。</span></li><li><b aria-hidden="true">2</b><span>点击「兑换卡密」，确认会员有效期更新。</span></li><li><b aria-hidden="true">3</b><span>会员有效后，点击「进入酒馆」。</span></li></ol><figcaption>演示账号截图；请以自己账号显示的有效期为准。</figcaption></figure>

- **提前续费**：在原来的到期时间上继续加天数。
- **到期后续费**：从兑换时开始计算。到期后原资料保留 **15 天**，期间续费可继续使用；超过保留期清理后，续费获得新的空间。
- **每张卡密只可使用一次**。提示已使用时，先检查会员有效期和购买记录。

第一次进入酒馆会直接看到欢迎页。想更改故事里的称呼，点击顶部笑脸 **用户设定管理**；登录用户名不会跟着改变。

### 3. 忘记密码怎么办

在账号登录页点击 **忘记密码**，输入注册邮箱，点击 **发送找回邮件**。邮件链接有效期为 **15 分钟**；打开后设置至少 10 位的新密码，再重新登录。

注册验证信与找回密码信用途不同。没有申请过找回密码时，不要点击重置链接。

## 连接 API

酒馆像摆好桌椅的房间，API 才是负责接话的人。先准备好 **地址、密钥、模型**：地址告诉酒馆去哪里，密钥证明你有权限，模型决定由谁回复。

还没有密钥？先看 [预言家 API 站指南](/guides/yuyanjia-api/)，或前往 [API 站](https://api.yuyanjia.top/sign-up)、[自助商城](https://shop.yuyanjia.top/)。

### 1. 打开顶部第二个「插头」

选 **接口预设 → 预言家 API**，线路先用 **香港**，点击 **应用**。新账号若已经填好，可直接核对。

<figure class="tavern-shot"><button class="guide-shot-open" type="button" aria-haspopup="dialog" aria-label="放大查看标注：API 连接面板：预言家 API 预设、线路、应用按钮，以及下方的地址、密钥和模型"><span class="guide-shot-stage" style="aspect-ratio:1037/798;--shot-width:1037px;--shot-top:0%"><img src="/assets/yuyanjia-tavern/api.webp" alt="API 连接面板：预言家 API 预设、线路、应用按钮，以及下方的地址、密钥和模型" width="1037" height="798" loading="lazy" /><svg class="guide-shot-overlay" viewBox="0 0 1037 798" aria-hidden="true"><defs><marker id="shot-arrow-yuyanjia-tavern-3" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M1 1L10 6L1 11" fill="none" stroke="#ff695e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></marker></defs><g transform="translate(0 0)"><g><title>接口预设选择「预言家 API」。</title><rect class="guide-callout-target" x="81" y="142" width="889" height="36" rx="4"/><path class="guide-callout-arrow" d="M714.6 115.8 L619.6 138" marker-end="url(#shot-arrow-yuyanjia-tavern-3)"/><circle class="guide-callout-badge" cx="735" cy="111" r="21"/><text class="guide-callout-number" x="735" y="111" font-size="27">1</text></g><g><title>选择香港或北京线路。</title><rect class="guide-callout-target" x="56" y="179" width="973" height="32" rx="4"/><path class="guide-callout-arrow" d="M591.2 219.6 L582.2 215" marker-end="url(#shot-arrow-yuyanjia-tavern-3)"/><circle class="guide-callout-badge" cx="610" cy="229" r="21"/><text class="guide-callout-number" x="610" y="229" font-size="27">2</text></g><g><title>点击「应用」，再检查下方地址。</title><rect class="guide-callout-target" x="976" y="142" width="40" height="36" rx="4"/><path class="guide-callout-arrow" d="M962.7 126 L974.4 138" marker-end="url(#shot-arrow-yuyanjia-tavern-3)"/><circle class="guide-callout-badge" cx="948" cy="111" r="21"/><text class="guide-callout-number" x="948" y="111" font-size="27">3</text></g><g><title>填写自己的 API 密钥，不要填会员卡密。</title><rect class="guide-callout-target" x="7" y="529" width="989" height="29" rx="4"/><path class="guide-callout-arrow" d="M824.2 501.7 L644.3 525" marker-end="url(#shot-arrow-yuyanjia-tavern-3)"/><circle class="guide-callout-badge" cx="845" cy="499" r="21"/><text class="guide-callout-number" x="845" y="499" font-size="27">4</text></g><g><title>点击「连接」，等待连接结果和模型列表。</title><rect class="guide-callout-target" x="7" y="699" width="42" height="29" rx="4"/><path class="guide-callout-arrow" d="M124.9 742.1 L53 720.9" marker-end="url(#shot-arrow-yuyanjia-tavern-3)"/><circle class="guide-callout-badge" cx="145" cy="748" r="21"/><text class="guide-callout-number" x="145" y="748" font-size="27">5</text></g><g><title>从「可用模型」中亲自选择一个模型。</title><rect class="guide-callout-target" x="7" y="662" width="1023" height="29" rx="4"/><path class="guide-callout-arrow" d="M790.2 641.7 L662.8 658" marker-end="url(#shot-arrow-yuyanjia-tavern-3)"/><circle class="guide-callout-badge" cx="811" cy="639" r="21"/><text class="guide-callout-number" x="811" y="639" font-size="27">6</text></g><g><title>没有模型列表时，才在这里手动填完整模型名。</title><rect class="guide-callout-target" x="7" y="595" width="1023" height="29" rx="4"/><path class="guide-callout-arrow" d="M795.1 578.3 L682.8 591" marker-end="url(#shot-arrow-yuyanjia-tavern-3)"/><circle class="guide-callout-badge" cx="816" cy="576" r="21"/><text class="guide-callout-number" x="816" y="576" font-size="27">7</text></g></g></svg></span><span class="guide-shot-open-label">放大查看标注 ↗</span></button><ol class="guide-shot-legend"><li><b aria-hidden="true">1</b><span>接口预设选择「预言家 API」。</span></li><li><b aria-hidden="true">2</b><span>选择香港或北京线路。</span></li><li><b aria-hidden="true">3</b><span>点击「应用」，再检查下方地址。</span></li><li><b aria-hidden="true">4</b><span>填写自己的 API 密钥，不要填会员卡密。</span></li><li><b aria-hidden="true">5</b><span>点击「连接」，等待连接结果和模型列表。</span></li><li><b aria-hidden="true">6</b><span>从「可用模型」中亲自选择一个模型。</span></li><li><b aria-hidden="true">7</b><span>没有模型列表时，才在这里手动填完整模型名。</span></li></ol><figcaption>正式站实拍：先选择预设与线路，再点「应用」。这张图尚未应用，地址和密钥保持空白。</figcaption></figure>

<div class="tavern-table-wrap">

| 检查位置 | 使用预言家 API 时应当是什么 |
| --- | --- |
| API | 聊天补全 |
| 聊天补全来源 | 自定义（兼容 OpenAI） |
| 香港线路地址 | `https://api.yuyanjia.top/v1` |
| 北京线路地址 | `https://82.156.90.32:3010/v1` |

</div>

**两条线路任选一条即可。** 切换线路会保留已填的密钥与模型，但要重新确认连接状态和模型是否可用；不会自动替你切到另一条线路。

### 2. 填密钥、连接，再亲自选模型

1. 将完整 API 密钥粘贴到 **自定义 API 密钥**。不要填会员卡密、充值码或账号密码。
2. 点击 **连接**，等待下方显示连接结果。
3. 在 **可用模型** 中选择一个模型。列表回来后，**不会自动替你选第一项**。
4. 服务商不提供模型列表时，在 **输入模型名** 中填写服务商提供的完整模型名称。

:::success
**完成标准：地址正确、密钥已保存、模型已选择，且没有连接报错。** 能看到模型列表不等于已经选好模型。角色卡有指定模型要求时，以作者说明为准。
:::

### 3. 余额会自动显示

密钥保存并连接后，兼容接口会在 **自定义 API 密钥** 标题旁自动显示余额，不需要另外按查询按钮。保留上方 **余额显示 → 自动** 即可。

「未连接」先检查连接；「不支持」表示接口没有兼容的查询方式，**不代表余额为零**。实际可用额度和扣费明细以你的 API 服务商页面为准。

<details class="tavern-fold"><summary>我用其他服务商，怎么填写？</summary>

兼容 OpenAI 的接口可选择 **其他兼容接口**，点击「应用」后填写该服务商提供的地址、密钥和模型。原生服务商则在「聊天补全来源」中选择对应项。

不同服务商的密钥不能通用。切换后重新确认密钥归属，不要把预言家 API 的密钥交给其他地址。地址结尾是否需要 `/v1`，以服务商说明为准，不要重复添加。

</details>

## 导入角色与配套文件

### 先认清手里的文件

<div class="tavern-table-wrap">

| 文件 | 像什么 | 去哪里导入 |
| --- | --- | --- |
| **角色卡**，常见为 PNG / JSON | 对戏角色的档案与开场 | 最右侧「角色管理」→ 从文件导入角色 |
| **聊天补全预设**，通常为 JSON | 回复习惯与写作要求 | 第一个「AI 响应配置」→ 导入预设 |
| **世界书**，通常为 JSON | 故事的设定资料 | 第四个「世界书」→ 导入世界书 |
| **正则**，通常为 JSON | 配套的文字处理或界面显示规则 | 第七个「扩展程序」→ 正则 → 导入正则 |
| **用户人设** | 你在故事里是谁 | 笑脸「用户设定管理」 |

</div>

文件都叫 JSON，不代表可以放进同一个入口。先看作者说明，按类型分别导入。

### 1. 导入角色卡

点击顶部最右边的 **角色管理**，再点击 **从文件导入角色** 图标，选择下载好的原始角色卡文件。

<figure class="tavern-shot tavern-shot-narrow"><button class="guide-shot-open" type="button" aria-haspopup="dialog" aria-label="放大查看标注：角色管理顶部工具条，从左至右包含新建角色、从文件导入角色和从 URL 导入等按钮"><span class="guide-shot-stage" style="aspect-ratio:517/255;--shot-width:517px;--shot-top:0%"><img src="/assets/yuyanjia-tavern/characters.webp" alt="角色管理顶部工具条，从左至右包含新建角色、从文件导入角色和从 URL 导入等按钮" width="517" height="255" loading="lazy" /><svg class="guide-shot-overlay" viewBox="0 0 517 255" aria-hidden="true"><defs><marker id="shot-arrow-yuyanjia-tavern-4" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M1 1L10 6L1 11" fill="none" stroke="#ff695e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></marker></defs><g transform="translate(0 0)"><g><title>点击「从文件导入角色」，选择原始 PNG / JSON。</title><rect class="guide-callout-target" x="41" y="168" width="26" height="26" rx="4"/><path class="guide-callout-arrow" d="M162.8 120.8 L71 171.6" marker-end="url(#shot-arrow-yuyanjia-tavern-4)"/><circle class="guide-callout-badge" cx="175" cy="114" r="14"/><text class="guide-callout-number" x="175" y="114" font-size="19">1</text></g></g></svg></span><span class="guide-shot-open-label">放大查看标注 ↗</span></button><ol class="guide-shot-legend"><li><b aria-hidden="true">1</b><span>点击「从文件导入角色」，选择原始 PNG / JSON。</span></li></ol><figcaption>从文件导入是「新建角色」右侧的托盘箭头。电脑上把鼠标停在图标上可看到名称。</figcaption></figure>

**PNG 角色卡不是普通截图。** 图片里面可能还装着角色资料；请下载原文件，不要用聊天软件压缩后的图片，也不要拿角色介绍的截图来导入。

导入后点击角色名称或头像，出现角色开场白即可。若弹出导入世界书、启用配套正则等询问，先阅读内容，再按你信任的作者说明处理。

### 2. 导入并选中配套预设

打开第一个 **AI 响应配置**，在「对话补全预设」旁点击 **导入预设**。导入后，确认下拉框选中的是你要使用的预设。

<figure class="tavern-shot tavern-shot-narrow"><button class="guide-shot-open" type="button" aria-haspopup="dialog" aria-label="放大查看标注：AI 响应配置常用面板：预设导入导出、预设下拉框、上下文和回复长度、流式传输"><span class="guide-shot-stage" style="aspect-ratio:517/430;--shot-width:517px;--shot-top:0%"><img src="/assets/yuyanjia-tavern/reply.webp" alt="AI 响应配置常用面板：预设导入导出、预设下拉框、上下文和回复长度、流式传输" width="517" height="430" loading="lazy" /><svg class="guide-shot-overlay" viewBox="0 0 517 430" aria-hidden="true"><defs><marker id="shot-arrow-yuyanjia-tavern-5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M1 1L10 6L1 11" fill="none" stroke="#ff695e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></marker></defs><g transform="translate(0 0)"><g><title>点击导入图标，选择聊天补全预设文件。</title><rect class="guide-callout-target" x="397" y="138" width="29" height="26" rx="4"/><path class="guide-callout-arrow" d="M362.5 117 L393 138.2" marker-end="url(#shot-arrow-yuyanjia-tavern-5)"/><circle class="guide-callout-badge" cx="351" cy="109" r="14"/><text class="guide-callout-number" x="351" y="109" font-size="19">1</text></g><g><title>导入后，在下拉框选中要使用的预设。</title><rect class="guide-callout-target" x="14" y="169" width="381" height="29" rx="4"/><path class="guide-callout-arrow" d="M270.8 121.6 L224.3 165" marker-end="url(#shot-arrow-yuyanjia-tavern-5)"/><circle class="guide-callout-badge" cx="281" cy="112" r="14"/><text class="guide-callout-number" x="281" y="112" font-size="19">2</text></g></g></svg></span><span class="guide-shot-open-label">放大查看标注 ↗</span></button><ol class="guide-shot-legend"><li><b aria-hidden="true">1</b><span>点击导入图标，选择聊天补全预设文件。</span></li><li><b aria-hidden="true">2</b><span>导入后，在下拉框选中要使用的预设。</span></li></ol><figcaption>正式站已有账号截图，数值是该账号当前设置，不是要求你照抄的推荐值。</figcaption></figure>

:::warning
**导入预设后，再看一眼 API 面板。** 有些预设会改变来源、模型或回复参数。保留作者要求，同时确认地址、密钥与模型仍然对应当前服务商。
:::

新账号已提供 **预言家初始配置**。有配套预设的卡，优先按作者说明选择；没有配套要求时，可从初始配置开始。

### 3. 世界书、正则和快捷回复按需安装

- **世界书**：单独文件在第四个入口导入。导入到库里和启用是两回事：当前角色专用的书按作者说明绑定角色，全局书才放入「已启用的世界书（全局有效）」。
- **正则**：第七个入口展开「正则」，点击「导入正则」。只为某张卡服务的规则，要核对适用范围，避免影响其他角色。
- **快速回复**：第七个入口展开「快速回复」，导入作者提供的回复集，再启用或挂载到需要的聊天。出现按钮后，先读说明再点击；部分按钮会发送内容或执行操作。
- **酒馆助手**：站内已经统一安装维护，使用需要它的角色卡时不必再安装一份。

<figure class="tavern-shot"><button class="guide-shot-open" type="button" aria-haspopup="dialog" aria-label="放大查看标注：扩展程序内展开的正则面板，包括导入正则及全局、预设、局部三个范围"><span class="guide-shot-stage" style="aspect-ratio:1037/660;--shot-width:1037px;--shot-top:0%"><img src="/assets/yuyanjia-tavern/regex.webp" alt="扩展程序内展开的正则面板，包括导入正则及全局、预设、局部三个范围" width="1037" height="660" loading="lazy" /><svg class="guide-shot-overlay" viewBox="0 0 1037 660" aria-hidden="true"><defs><marker id="shot-arrow-yuyanjia-tavern-6" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M1 1L10 6L1 11" fill="none" stroke="#ff695e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></marker></defs><g transform="translate(0 0)"><g><title>点击右侧箭头展开「正则」。</title><rect class="guide-callout-target" x="998" y="201" width="30" height="30" rx="4"/><path class="guide-callout-arrow" d="M967.9 188.1 L994 204.2" marker-end="url(#shot-arrow-yuyanjia-tavern-6)"/><circle class="guide-callout-badge" cx="950" cy="177" r="21"/><text class="guide-callout-number" x="950" y="177" font-size="27">1</text></g><g><title>点击「导入正则」，选择配套正则文件。</title><rect class="guide-callout-target" x="872" y="242" width="91" height="29" rx="4"/><path class="guide-callout-arrow" d="M832 296.2 L877.6 275" marker-end="url(#shot-arrow-yuyanjia-tavern-6)"/><circle class="guide-callout-badge" cx="813" cy="305" r="21"/><text class="guide-callout-number" x="813" y="305" font-size="27">2</text></g></g></svg></span><span class="guide-shot-open-label">放大查看标注 ↗</span></button><ol class="guide-shot-legend"><li><b aria-hidden="true">1</b><span>点击右侧箭头展开「正则」。</span></li><li><b aria-hidden="true">2</b><span>点击「导入正则」，选择配套正则文件。</span></li></ol><figcaption>「正则」里的导入入口；不要将正则文件导入成聊天补全预设。</figcaption></figure>

<details class="tavern-fold"><summary>快速回复：文件导入了，按钮还是没出现？</summary>

<figure class="tavern-shot tavern-shot-narrow"><button class="guide-shot-open" type="button" aria-haspopup="dialog" aria-label="放大查看标注：快速回复设置：启用开关、全局与聊天回复集、编辑区域的导入按钮"><span class="guide-shot-stage" style="aspect-ratio:512/486;--shot-width:512px;--shot-top:0%"><img src="/assets/yuyanjia-tavern/quick-reply.webp" alt="快速回复设置：启用开关、全局与聊天回复集、编辑区域的导入按钮" width="512" height="486" loading="lazy" /><svg class="guide-shot-overlay" viewBox="0 0 512 486" aria-hidden="true"><defs><marker id="shot-arrow-yuyanjia-tavern-7" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M1 1L10 6L1 11" fill="none" stroke="#ff695e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></marker></defs><g transform="translate(0 0)"><g><title>从这里导入整个快速回复集。</title><rect class="guide-callout-target" x="258" y="330" width="26" height="27" rx="4"/><path class="guide-callout-arrow" d="M298.2 309.9 L285.2 326" marker-end="url(#shot-arrow-yuyanjia-tavern-7)"/><circle class="guide-callout-badge" cx="307" cy="299" r="14"/><text class="guide-callout-number" x="307" y="299" font-size="19">1</text></g><g><title>勾选「启用快速回复」。</title><rect class="guide-callout-target" x="9" y="34" width="18" height="20" rx="4"/><path class="guide-callout-arrow" d="M36 103 L3 103 L3 44 L5 44" marker-end="url(#shot-arrow-yuyanjia-tavern-7)"/><circle class="guide-callout-badge" cx="50" cy="103" r="14"/><text class="guide-callout-number" x="50" y="103" font-size="19">2</text></g><g><title>当前故事使用的回复集，在「聊天快速回复集」旁点 ＋ 添加。</title><rect class="guide-callout-target" x="121" y="200" width="26" height="27" rx="4"/><path class="guide-callout-arrow" d="M226.3 233.1 L151 217.1" marker-end="url(#shot-arrow-yuyanjia-tavern-7)"/><circle class="guide-callout-badge" cx="240" cy="236" r="14"/><text class="guide-callout-number" x="240" y="236" font-size="19">3</text></g><g><title>检查 Buttons 是否勾选，决定是否显示按钮。</title><rect class="guide-callout-target" x="352" y="154" width="20" height="20" rx="4"/><path class="guide-callout-arrow" d="M399.4 132.1 L376 152" marker-end="url(#shot-arrow-yuyanjia-tavern-7)"/><circle class="guide-callout-badge" cx="410" cy="123" r="14"/><text class="guide-callout-number" x="410" y="123" font-size="19">4</text></g></g></svg></span><span class="guide-shot-open-label">放大查看标注 ↗</span></button><ol class="guide-shot-legend"><li><b aria-hidden="true">1</b><span>从这里导入整个快速回复集。</span></li><li><b aria-hidden="true">2</b><span>勾选「启用快速回复」。</span></li><li><b aria-hidden="true">3</b><span>当前故事使用的回复集，在「聊天快速回复集」旁点 ＋ 添加。</span></li><li><b aria-hidden="true">4</b><span>检查 Buttons 是否勾选，决定是否显示按钮。</span></li></ol><figcaption>实际设置区裁图。「编辑快速回复」一行的文件箭头负责导入整个回复集。</figcaption></figure>

先在「编辑快速回复」旁导入回复集，再勾选上方 **启用快速回复**。按作者要求，在 **聊天快速回复集** 或 **全局快速回复集** 旁点「＋」添加并选中对应回复集，核对 **Buttons** 是否勾选。只用于当前故事的按钮优先挂到当前聊天；全局添加会影响其他聊天。

</details>

## 设定故事里的自己

**笑脸 → 用户设定管理** 管的是“你”，最右侧 **角色管理** 管的是“对方”。这两个入口最容易弄反。

1. 点击 **创建**，或选择已有的人设。
2. 用名字旁的铅笔修改称呼；在 **用户设定描述** 填写身份、外貌、性格和必要的关系设定。
3. 想在新聊天中默认使用这个人设，点击 **默认**。切换角色或新开故事后，再确认当前人设是否合适。

<figure class="tavern-shot"><button class="guide-shot-open" type="button" aria-haspopup="dialog" aria-label="放大查看标注：用户设定管理：创建、当前人设名称、头像、描述和默认按钮"><span class="guide-shot-stage" style="aspect-ratio:1037/557;--shot-width:1037px;--shot-top:0%"><img src="/assets/yuyanjia-tavern/persona.webp" alt="用户设定管理：创建、当前人设名称、头像、描述和默认按钮" width="1037" height="557" loading="lazy" /><svg class="guide-shot-overlay" viewBox="0 0 1037 557" aria-hidden="true"><defs><marker id="shot-arrow-yuyanjia-tavern-8" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M1 1L10 6L1 11" fill="none" stroke="#ff695e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></marker></defs><g transform="translate(0 0)"><g><title>点击「创建」，新增自己的故事身份。</title><rect class="guide-callout-target" x="7" y="169" width="66" height="29" rx="4"/><path class="guide-callout-arrow" d="M124.5 202.4 L77 191.8" marker-end="url(#shot-arrow-yuyanjia-tavern-8)"/><circle class="guide-callout-badge" cx="145" cy="207" r="21"/><text class="guide-callout-number" x="145" y="207" font-size="27">1</text></g><g><title>点击铅笔，修改当前人设名称。</title><rect class="guide-callout-target" x="673" y="204" width="29" height="29" rx="4"/><path class="guide-callout-arrow" d="M633.2 159.5 L670.5 200" marker-end="url(#shot-arrow-yuyanjia-tavern-8)"/><circle class="guide-callout-badge" cx="619" cy="144" r="21"/><text class="guide-callout-number" x="619" y="144" font-size="27">2</text></g><g><title>点击图片图标，设置人设头像。</title><rect class="guide-callout-target" x="706" y="204" width="30" height="29" rx="4"/><path class="guide-callout-arrow" d="M754.2 163 L732.1 200" marker-end="url(#shot-arrow-yuyanjia-tavern-8)"/><circle class="guide-callout-badge" cx="765" cy="145" r="21"/><text class="guide-callout-number" x="765" y="145" font-size="27">3</text></g><g><title>在这里填写你的人设描述。</title><rect class="guide-callout-target" x="524" y="267" width="506" height="145" rx="4"/><path class="guide-callout-arrow" d="M483 336.2 L520 336.6" marker-end="url(#shot-arrow-yuyanjia-tavern-8)"/><circle class="guide-callout-badge" cx="462" cy="336" r="21"/><text class="guide-callout-number" x="462" y="336" font-size="27">4</text></g><g><title>想在新聊天中默认使用，点击「默认」。</title><rect class="guide-callout-target" x="523" y="481" width="68" height="30" rx="4"/><path class="guide-callout-arrow" d="M483 491.3 L519 493.6" marker-end="url(#shot-arrow-yuyanjia-tavern-8)"/><circle class="guide-callout-badge" cx="462" cy="490" r="21"/><text class="guide-callout-number" x="462" y="490" font-size="27">5</text></g></g></svg></span><span class="guide-shot-open-label">放大查看标注 ↗</span></button><ol class="guide-shot-legend"><li><b aria-hidden="true">1</b><span>点击「创建」，新增自己的故事身份。</span></li><li><b aria-hidden="true">2</b><span>点击铅笔，修改当前人设名称。</span></li><li><b aria-hidden="true">3</b><span>点击图片图标，设置人设头像。</span></li><li><b aria-hidden="true">4</b><span>在这里填写你的人设描述。</span></li><li><b aria-hidden="true">5</b><span>想在新聊天中默认使用，点击「默认」。</span></li></ol><figcaption>先写必要的人设即可；注入位置等高级选项可以保持原值。</figcaption></figure>

<blockquote class="tavern-example"><p>例如：我叫林澈，是第一次来城里送信的年轻旅人。说话直接，遇到陌生人时稍显拘谨，与酒馆向导初次见面。</p></blockquote>

## 开始第一段故事

选好角色后，在底部输入你想说的话或行动，点击发送。**卡片自带的开场白不消耗 AI 额度，也不能证明接口已经连通；你发送后收到的回复才来自 AI。**

<figure class="tavern-shot"><img src="/assets/yuyanjia-tavern/chat.webp" alt="演示角色卡打开后的聊天上方区域，显示作者预写开场白" width="1037" height="155" loading="lazy" /><figcaption>隔离演示账号的真实聊天上方裁图。图中为卡片开场白，未调用付费 AI。</figcaption></figure>

<figure class="tavern-shot"><button class="guide-shot-open" type="button" aria-haspopup="dialog" aria-label="放大查看标注：聊天底部的菜单、消息输入框和右侧纸飞机发送按钮"><span class="guide-shot-stage" style="aspect-ratio:1037/113;--shot-width:1037px;--shot-top:63.716814159292035%"><img src="/assets/yuyanjia-tavern/chat-input.webp" alt="聊天底部的菜单、消息输入框和右侧纸飞机发送按钮" width="1037" height="41" loading="lazy" /><svg class="guide-shot-overlay" viewBox="0 0 1037 113" aria-hidden="true"><defs><marker id="shot-arrow-yuyanjia-tavern-9" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M1 1L10 6L1 11" fill="none" stroke="#ff695e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></marker></defs><g transform="translate(0 72)"><g><title>左侧三横线：打开聊天菜单。</title><rect class="guide-callout-target" x="6" y="5" width="28" height="30" rx="4"/><path class="guide-callout-arrow" d="M33.3 -19.1 L26.4 1" marker-end="url(#shot-arrow-yuyanjia-tavern-9)"/><circle class="guide-callout-badge" cx="40" cy="-39" r="21"/><text class="guide-callout-number" x="40" y="-39" font-size="27">1</text></g><g><title>中间输入你要说的话或行动。</title><rect class="guide-callout-target" x="100" y="3" width="890" height="34" rx="4"/><path class="guide-callout-arrow" d="M527.5 -19.8 L535.7 -1" marker-end="url(#shot-arrow-yuyanjia-tavern-9)"/><circle class="guide-callout-badge" cx="519" cy="-39" r="21"/><text class="guide-callout-number" x="519" y="-39" font-size="27">2</text></g><g><title>右侧纸飞机：发送消息。</title><rect class="guide-callout-target" x="1002" y="5" width="28" height="30" rx="4"/><path class="guide-callout-arrow" d="M1004.1 -18.9 L1010.2 1" marker-end="url(#shot-arrow-yuyanjia-tavern-9)"/><circle class="guide-callout-badge" cx="998" cy="-39" r="21"/><text class="guide-callout-number" x="998" y="-39" font-size="27">3</text></g></g></svg></span><span class="guide-shot-open-label">放大查看标注 ↗</span></button><ol class="guide-shot-legend"><li><b aria-hidden="true">1</b><span>左侧三横线：打开聊天菜单。</span></li><li><b aria-hidden="true">2</b><span>中间输入你要说的话或行动。</span></li><li><b aria-hidden="true">3</b><span>右侧纸飞机：发送消息。</span></li></ol><figcaption>聊天底部实拍：中间输入，右侧纸飞机发送，左侧三横线打开聊天菜单。</figcaption></figure>

<div class="tavern-checklist">
  <strong>发送前，检查四件事</strong>
  <ul><li>酒馆会员有效。</li><li>API 已连接，模型不为空。</li><li>已经选中角色及其配套预设。</li><li>当前用户人设是你想扮演的人。</li></ul>
</div>

想新开一段故事或找旧聊天，打开底部左侧的聊天菜单，查找 **开始新聊天**、**管理聊天记录** 等入口。删除消息、删除聊天前先确认对象；想留一份到本机时使用聊天记录的导出功能。

:::info
**不要把“上下文长度”当成永久记忆。** 它决定本次可带给模型的资料量。故事很长时，可整理剧情摘要、维护世界书，并核对角色卡自身的记忆说明；把数字调大并不保证模型都能读到，也可能增加费用。
:::

需要有人替你整理长篇往事时，可以按需开启内置的 **预言家记忆**。先看[开启、纠正与续聊说明](/guides/yuyanjia-tavern-memory/)；整理会额外使用自己的 AI 接口。

## 面板太多，先用这三个

<div class="tavern-priority">
  <a href="/guides/yuyanjia-tavern-panels/#panel-api"><b>② 插头</b><span>连接 AI</span></a>
  <a href="/guides/yuyanjia-tavern-panels/#panel-character"><b>⑨ 身份卡</b><span>选对戏角色</span></a>
  <a href="/guides/yuyanjia-tavern-panels/#panel-reply"><b>① 滑杆</b><span>切换配套预设</span></a>
</div>

九个设置面板顶部都有 **常用、全部功能、自定义**；预言家记忆使用独立的记事本面板。常用只收起不常用的选项，原功能仍在；按教程找不到按钮时，先点 **全部功能** 或右侧放大镜。

查看 [面板与记忆入口的完整图解](/guides/yuyanjia-tavern-panels/)。

## 换设备与找回存档

### 手机和电脑如何接着玩

在另一台设备打开 **同一个酒馆地址**，登录 **同一个账号**，即可读取已经保存的角色与聊天。正常保存即时生效，**不用等半小时备份**。

如果出现正在另一台设备编辑的提示，需要换设备时点击 **在这里继续**，等最新内容载入再操作。尽量不要同时在两台设备编辑同一段故事。

### 离开前，手动保存一次

准备换设备时，如果 AI 正在回复，先等它说完。点击左下角 **我的账号** 旁的 **保存到云端**，等看到 **已保存到云端**，再去另一台设备继续。离线、保存失败或出现冲突提示时，处理后再试，不要当作已经保存。

这会保存当前聊天和已确认的设置；输入框里还没发出去的话不会保存。它不会额外生成一份备份，下面每 30 分钟的备份是用来找回旧进度的。

<figure class="tavern-shot"><button class="guide-shot-open" type="button" aria-haspopup="dialog" aria-label="放大查看标注：酒馆左下角的我的账号、保存到云端按钮及已保存到云端提示"><span class="guide-shot-stage" style="aspect-ratio:1280/720;--shot-width:1280px;--shot-top:0%"><img src="/assets/yuyanjia-tavern/manual-save.webp" alt="酒馆左下角的我的账号、保存到云端按钮及已保存到云端提示" width="1280" height="720" loading="lazy" /><svg class="guide-shot-overlay" viewBox="0 0 1280 720" aria-hidden="true"><defs><marker id="shot-arrow-yuyanjia-tavern-10" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M1 1L10 6L1 11" fill="none" stroke="#ff695e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></marker></defs><g transform="translate(0 0)"><g><title>点击「保存到云端」。</title><rect class="guide-callout-target" x="93" y="680" width="86" height="31" rx="4"/><path class="guide-callout-arrow" d="M145.1 657.4 L140.7 676" marker-end="url(#shot-arrow-yuyanjia-tavern-10)"/><circle class="guide-callout-badge" cx="150" cy="637" r="21"/><text class="guide-callout-number" x="150" y="637" font-size="27">1</text></g><g><title>看到「已保存到云端」再换设备。</title><rect class="guide-callout-target" x="190" y="682" width="79" height="29" rx="4"/><path class="guide-callout-arrow" d="M270.5 659.1 L249.8 678" marker-end="url(#shot-arrow-yuyanjia-tavern-10)"/><circle class="guide-callout-badge" cx="286" cy="645" r="21"/><text class="guide-callout-number" x="286" y="645" font-size="27">2</text></g></g></svg></span><span class="guide-shot-open-label">放大查看标注 ↗</span></button><ol class="guide-shot-legend"><li><b aria-hidden="true">1</b><span>点击「保存到云端」。</span></li><li><b aria-hidden="true">2</b><span>看到「已保存到云端」再换设备。</span></li></ol><figcaption>演示环境实拍：按下左下角按钮，等待成功提示。</figcaption></figure>

### 下载一份，还是恢复到酒馆？

打开独立的 [存档恢复页](https://jiuguan.yuyanjia.top/restore)，登录后选择时间点。

<figure class="tavern-shot tavern-shot-narrow"><button class="guide-shot-open" type="button" aria-haspopup="dialog" aria-label="放大查看标注：演示账号的存档恢复页面：选择存档时间、下载存档、恢复到酒馆"><span class="guide-shot-stage" style="aspect-ratio:490/547;--shot-width:490px;--shot-top:0%"><img src="/assets/yuyanjia-tavern/restore.webp" alt="演示账号的存档恢复页面：选择存档时间、下载存档、恢复到酒馆" width="490" height="547" loading="lazy" /><svg class="guide-shot-overlay" viewBox="0 0 490 547" aria-hidden="true"><defs><marker id="shot-arrow-yuyanjia-tavern-11" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M1 1L10 6L1 11" fill="none" stroke="#ff695e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></marker></defs><g transform="translate(0 0)"><g><title>先选择要取回的存档时间。</title><rect class="guide-callout-target" x="65" y="197" width="361" height="50" rx="4"/><path class="guide-callout-arrow" d="M462 222 L430 222" marker-end="url(#shot-arrow-yuyanjia-tavern-11)"/><circle class="guide-callout-badge" cx="476" cy="222" r="14"/><text class="guide-callout-number" x="476" y="222" font-size="19">1</text></g><g><title>只想保存到本机：点击「下载存档」。</title><rect class="guide-callout-target" x="65" y="262" width="361" height="54" rx="4"/><path class="guide-callout-arrow" d="M462 289 L430 289" marker-end="url(#shot-arrow-yuyanjia-tavern-11)"/><circle class="guide-callout-badge" cx="476" cy="289" r="14"/><text class="guide-callout-number" x="476" y="289" font-size="19">2</text></g><g><title>要回退整个个人空间：点击「恢复到酒馆」。它与下载是两种不同操作。</title><rect class="guide-callout-target" x="65" y="326" width="361" height="45" rx="4"/><path class="guide-callout-arrow" d="M462 348 L430 348.1" marker-end="url(#shot-arrow-yuyanjia-tavern-11)"/><circle class="guide-callout-badge" cx="476" cy="348" r="14"/><text class="guide-callout-number" x="476" y="348" font-size="19">3</text></g></g></svg></span><span class="guide-shot-open-label">放大查看标注 ↗</span></button><ol class="guide-shot-legend"><li><b aria-hidden="true">1</b><span>先选择要取回的存档时间。</span></li><li><b aria-hidden="true">2</b><span>只想保存到本机：点击「下载存档」。</span></li><li><b aria-hidden="true">3</b><span>要回退整个个人空间：点击「恢复到酒馆」。它与下载是两种不同操作。</span></li></ol><figcaption>演示账号真实完成备份后拍摄。只有已成功生成的恢复点才会出现在列表中。</figcaption></figure>

<div class="tavern-compare">
  <section><span>留在自己的设备</span><strong>下载存档</strong><p>下载所选时间点的压缩包，不改变酒馆中的当前进度。重要故事建议另存一份。</p></section>
  <section><span>回到之前的进度</span><strong>恢复到酒馆</strong><p>恢复整个个人空间：聊天、角色、世界书、设置及个人插件，会回到所选时间点。</p></section>
</div>

恢复前会先保留当前状态。确认时间点后点击「恢复到酒馆」，阅读弹窗并确认；等待显示 **存档已恢复**，再让其他设备重新进入酒馆。不要一边恢复，一边继续编辑。

:::warning
**恢复不是只找回一条消息。** 它会切换整个个人空间。会员有效期不会倒退，全站酒馆助手不回退，当前 API 密钥保留；下载包不包含 API 密钥。
:::

备份每 **30 分钟**调度一次，通常保留最近 **7 天**的恢复点；没有变化时不重复生成。备份当前存放在酒馆服务器上，不能代替你保存在本机的副本。刚发生的内容不一定已经进入恢复点，先看清时间。

会员到期后，需要续费才能查看、下载或恢复存档。不要拖过 **15 天保留期**。

## 遇到问题，先看这里

<details class="tavern-fold"><summary>能看到开场白，发消息却没有回复</summary>

先看插头面板：模型是否为空、连接是否报错、密钥是否正确。开场白是角色卡自带内容，与 API 是否可用无关。保留现有聊天，按报错处理后再试，不要反复重建账号。

</details>

<details class="tavern-fold"><summary>401 / 403、429、模型不存在，分别查什么？</summary>

| 提示 | 先检查 |
| --- | --- |
| 401 / 403 | 密钥是否完整、是否属于当前地址、是否有该模型权限；也可能是服务商的访问限制。 |
| 429 | 请求是否过于频繁、服务商是否限流或额度受限。稍后重试，查看服务商说明。 |
| 模型不存在 / 无可用模型 | 重新获取模型列表，并核对完整名称与权限；不要照抄别人账号的模型名。 |
| 上下文或回复长度超限 | 模型支持的长度是否低于当前设置。按服务商限制调整，保留现有聊天。 |
| 5xx / 超时 | 查看服务商状态，稍后重试；预言家两条线路可手动切换后再连接。 |

完整错误信息比一张“没反应”的截图更有帮助；分享截图前遮住密钥。

</details>

<details class="tavern-fold"><summary>卡片变成代码，或配套按钮没出现</summary>

先检查作者是否要求酒馆助手、正则、世界书或快速回复集，以及相应功能是否启用。把插件设置区收起来不会停用插件；先切到「全部功能」检查。不要直接删掉代码或盲目安装多份插件。

</details>

<details class="tavern-fold"><summary>导入后找不到角色，或者页面很卡</summary>

检查角色搜索词、收藏筛选和分页，再确认导入的是原始 PNG / JSON。一次先导入要玩的几张卡，避免同时塞入大量角色、背景和插件。手机页面不正常时，先用浏览器直接打开酒馆网址，避免在其他应用的内置小窗里操作。

</details>

<details class="tavern-fold"><summary>恢复页没有存档，或最新一次备份失败</summary>

新账号可能还没有完成第一次备份；也可能最近没有变化。确认会员有效，并核对账号是否正确。备份失败不会变成成功的恢复点；若页面提示失败，可先取回已有的存档，联系群内管理员排查。

</details>

<div class="tavern-help"><strong>还需要帮忙？</strong><p>QQ 交流群：<b>1108815785</b> · 进群答案：<b>本杰驴</b></p><p>说明你在哪一步、使用的浏览器和报错内容。截图请遮住密码、API 密钥、卡密和私人聊天。</p><a href="https://hub.yuyanjia.top/" target="_blank" rel="noopener noreferrer">逛逛预言家 TV 文游合集 ↗</a></div>
