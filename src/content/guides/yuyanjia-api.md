---
title: "预言家API站指南"
description: "按步骤完成购买、充值、密钥填写和模型选择。"
date: "2026-05-28"
order: 1
slug: "yuyanjia-api"
source: "https://guides.yuyanjia.top/guides/yuyanjia-api"
---

:::success

## 🛍️ 购买方式说明

点击下方方案，即可直达对应教程板块。

<div class="choice-grid">
  <a class="choice-card" href="#方案一直购密钥">
    <span>方案一</span>
    <strong>直购密钥</strong>
    <em>懒人首选</em>
    <small>买完直接复制 sk- 密钥，粘贴进 APP 设置即可使用。</small>
    <b>适合：没有 QQ 邮箱，无法验证注册账号的同学。</b>
  </a>
  <a class="choice-card" href="#方案二注册账号充值额度">
    <span>方案二</span>
    <strong>注册账号，充值额度</strong>
    <em>掌控全场</em>
    <small>先注册 API 站账号（仅支持 QQ 邮箱验证），可支付宝直充或兑换码充值。</small>
    <b>有签到及邀请福利，适合：想看清楚钱花在哪的同学。</b>
  </a>
  <a class="choice-card choice-card-guide" href="#api-basics">
    <span>第一次使用 API？</span>
    <strong>先看懂“地址、钥匙、员工”</strong>
    <em>新手补课</em>
    <small>三分钟弄懂 Base URL、API Key 和模型，顺便避开最常见的配置错误。</small>
    <b>跳到通俗易懂版 ↓</b>
  </a>
</div>

:::

## 方案一：直购密钥

购买地址：[https://shop.yuyanjia.top/](https://shop.yuyanjia.top/)

分类切换至【API密钥】，选择自己想要的额度

:::danger
**注意检查一下商品是【密钥】，别买成兑换码了**

:::

![](/assets/yuyanjia-api/step-01.png)

:::danger

### ⚠️ 付款后重要提示 (必读)

**1. ⏳ 请耐心等待跳转**

**付款成功后，千万别急着关闭页面！**

由于网络延迟，系统有时需要几秒钟来确认收款并自动跳转到卡密页。给它一点时间，卡密马上就出来。

**2. 🔍 页面关了怎么办？**

如果你不小心手滑提前关掉了页面，或者跳转失败了，别慌！

**回到购买页面**，点击顶部的 **【订单查询】 -> 选择 【下单邮箱查询】**，输入你的邮箱就能找回卡密。

**3. 🛠️ 遇到异常找博主**

如果钱扣了，查询也没结果（可能是我在睡觉，监听掉了），请**直接带上【付款截图】和【下单邮箱】来戳我**。

放心，只要钱付了，我一定给你补单，绝对不会让你白花钱！

:::

:::color1

### ✅ 提取密钥指南

付款成功后，你会看到一串**以 sk- 开头的一长串字母，这就是你的魔法杖芯（API 密钥）**。

**操作步骤：**

**全选复制：** 请务必从头到尾完整复制，**包括前面的 sk- 两个字母**！ 少一个字符都无法使用。

**妥善保存：** 建议立刻粘贴到你的备忘录或微信文件传输助手里备份。（省得以后找起来麻烦）。

:::

回到我们的 APP，点击设置齿轮。

:::color4
**将 【快速预设】 切换为 【预言家API】。**

:::

:::danger
API 密钥栏：粘贴刚才复制的密钥。

:::

点击【保存设置】

:::color1
再次打开设置时，快速预设栏会跳回自定义，不用理会它。

请核对这三类信息：

<ul class="guide-url-list">
  <li class="guide-url-item">
    <span class="guide-url-label"><strong>URL（主站，香港）：</strong></span>
    <a class="guide-url-value" href="https://api.yuyanjia.top/v1">https://api.yuyanjia.top/v1</a>
  </li>
  <li class="guide-url-item">
    <span class="guide-url-label"><strong>URL（备用，北京）：</strong></span>
    <a class="guide-url-value" href="https://82.156.90.32:3010/v1">https://82.156.90.32:3010/v1</a>
  </li>
  <li><strong>密钥：</strong>已粘贴刚才复制的密钥</li>
  <li><strong>模型：</strong>保持默认或按下方建议选择</li>
</ul>

这两个 URL 都是同一个 API 站的入口，选择自己能用的就好。一般先用主站；主站打不开再试备用。

只要 URL、密钥、模型对上，就可以保存使用。

:::

![](/assets/yuyanjia-api/step-02.png)

OK，大功告成，现在就可以去聊天了！

### 🔎 密钥余额查询

如果想确认直购密钥的额度是否到账，或之后想看剩余额度，可以打开 [密钥余额查询](https://balance-checker.yuyanjia.top)，粘贴刚才复制的 sk- 密钥查看。

## 方案二：注册账号，充值额度

### 一、注册

点击链接注册：

<ul class="guide-url-list">
  <li class="guide-url-item">
    <span class="guide-url-label"><strong>主站：</strong></span>
    <a class="guide-url-value" href="https://api.yuyanjia.top/sign-up">https://api.yuyanjia.top/sign-up</a>
  </li>
  <li class="guide-url-item">
    <span class="guide-url-label"><strong>备用入口：</strong></span>
    <a class="guide-url-value" href="https://82.156.90.32:3010/sign-up">https://82.156.90.32:3010/sign-up</a>
  </li>
</ul>

:::color1
注册账号目前**仅支持 QQ 邮箱验证**。注册后可以使用每日签到和邀请福利，额度、充值记录、消耗明细也都可以在账号里查看。

这两个注册链接也是同一个站子的入口，选择自己能打开的那个就好。

**多次发送还是收不到验证码？按这个顺序排查：**

1. 先去 QQ 邮箱的**垃圾箱**里找一下。
2. 垃圾箱也没有，再检查邮件是不是被系统拦截了。
3. 不知道在哪里检查，可以照着这篇教程操作：👉 [QQ 邮箱收不到验证码排查教程（小红书）](https://xhslink.cn/o/AA84yRjngXY)

如果全部排查过还是收不到，或者没有 QQ 邮箱，建议回到上面的【方案一：直购密钥】。

:::

![](/assets/yuyanjia-api/step-03.png)

### 二、充值

注册完成后，点击菜单的 【控制台】 →左侧菜单栏 【钱包管理】。

![](/assets/yuyanjia-api/step-04.png)

#### 方式一：支付宝直充

如果你想省去购买兑换码的步骤，可以直接在钱包管理里选择充值金额，付款方式选择【支付宝当面付】。

支付宝直充会收取 **0.6% 手续费**，例如充值 10 元，需要支付 10.06 元。支付成功后额度会直接进入账号余额，不需要兑换码，也不会生成兑换码订单。

#### 方式二：购买兑换码

点击【购买兑换码】

![](/assets/yuyanjia-api/step-05.png)

分类切换至【API站充值】

![](/assets/yuyanjia-api/step-06.png)

获得卡密后，回到api站，兑换额度即可

![](/assets/yuyanjia-api/step-07.png)

### 三、锻造密钥(API KEY)

点击菜单的 【控制台】 →左侧菜单栏 【令牌管理】 → 【添加令牌】。

![](/assets/yuyanjia-api/step-08.png)

:::danger
请按下面这样填：

- **名称：** 随便填（比如“霍格沃茨”）。
- **过期时间：** 一定要选“永不过期”。
- **额度：** 开启【无限额度】。
- **访问限制：** 留空默认即可。

最后点击【提交】。

:::

![](/assets/yuyanjia-api/step-09.png)

点击红框图标，可以直接复制你的密钥

![](/assets/yuyanjia-api/step-10.png)

### 四、APP 注入能量

回到我们的 APP，点击设置齿轮。

:::color4
**将 【快速预设】 切换为 【预言家API】。**

:::

:::danger
API 密钥栏：粘贴刚才复制的密钥。

:::

![](/assets/yuyanjia-api/step-11.png)

点击【保存设置】

:::color1
再次打开设置时，快速预设栏会跳回自定义，不用理会它。

请核对这三类信息：

<ul class="guide-url-list">
  <li class="guide-url-item">
    <span class="guide-url-label"><strong>URL（主站，香港）：</strong></span>
    <a class="guide-url-value" href="https://api.yuyanjia.top/v1">https://api.yuyanjia.top/v1</a>
  </li>
  <li class="guide-url-item">
    <span class="guide-url-label"><strong>URL（备用，北京）：</strong></span>
    <a class="guide-url-value" href="https://82.156.90.32:3010/v1">https://82.156.90.32:3010/v1</a>
  </li>
  <li><strong>密钥：</strong>已粘贴刚才复制的密钥</li>
  <li><strong>模型：</strong>保持默认或按下方建议选择</li>
</ul>

这两个 URL 都是同一个 API 站的入口，选择自己能用的就好。一般先用主站；主站打不开再试备用。

只要 URL、密钥、模型对上，就可以保存使用。

:::

<section class="api-basics" id="api-basics" aria-labelledby="api-basics-title">
  <header class="api-basics-header">
    <div>
      <span class="api-basics-kicker">新手补课 · 老手可跳过</span>
      <h2 id="api-basics-title">🪄 什么是 API？</h2>
      <p>预言家 TV 的文游需要 AI 大模型帮你续写剧情。你可以把提供 AI 服务的平台想成一家“魔法公司”，而 APP 就像替你送信的猫头鹰。</p>
    </div>
    <a class="api-basics-back" href="#购买方式说明">↑ 返回购买方式</a>
  </header>
  <div class="api-parts" aria-label="API 的三个组成部分">
    <article class="api-part">
      <span class="api-part-icon" aria-hidden="true">🏢</span>
      <div>
        <small>Base URL · 地址</small>
        <h3>公司的办公地址</h3>
        <p>告诉猫头鹰应该去哪里送信。</p>
      </div>
    </article>
    <article class="api-part">
      <span class="api-part-icon" aria-hidden="true">🔑</span>
      <div>
        <small>API Key · 密钥</small>
        <h3>公司的通行证</h3>
        <p>证明平台允许你使用它的服务。</p>
      </div>
    </article>
    <article class="api-part">
      <span class="api-part-icon" aria-hidden="true">🤖</span>
      <div>
        <small>Model · 模型</small>
        <h3>负责回信的员工</h3>
        <p>比如 Gemini、Claude、DeepSeek。</p>
      </div>
    </article>
  </div>
  <div class="api-match-rule">
    <span>魔法生效公式</span>
    <strong>地址 ＋ 钥匙 ＋ 员工 ＝ 顺利回信</strong>
    <p>三样东西必须来自互相匹配的平台，少一样或填错一样都不行。</p>
  </div>
  <div class="api-error-list">
    <article class="api-error-item">
      <span class="api-error-index">01</span>
      <div>
        <h3>钥匙不是自己编的密码</h3>
        <p>API Key 必须由你准备使用的平台生成。可以去对应平台注册账号后创建，也可以从它提供的正规渠道购买现成密钥；从哪家拿到密钥，就使用哪家给出的地址和模型。</p>
        <p class="api-error-note">密钥和银行卡密码差不多重要：复制时一个字符都不能少，也不要发给陌生人或放进公开截图。</p>
      </div>
    </article>
    <article class="api-error-item">
      <span class="api-error-index">02</span>
      <div>
        <h3>别把钥匙插错门</h3>
        <p>拿到 A 平台的密钥，就要填写 A 平台的 Base URL。拿着 B 公司的钥匙去开 A 公司的门，密钥本身没错也不会有反应。</p>
      </div>
    </article>
    <article class="api-error-item">
      <span class="api-error-index">03</span>
      <div>
        <h3>别叫错员工的“工号”</h3>
        <p>中转站为了区分渠道，模型名称通常会带上 <code>[cli]</code>、<code>[满血]</code> 之类的前缀。手动复制时必须连同括号一起复制完整，少一个符号都可能找不到模型。</p>
      </div>
    </article>
  </div>
  <aside class="api-pull-guide">
    <div class="api-pull-copy">
      <span>最省事的正确姿势</span>
      <h3>能拉取模型，就别自己手打工号</h3>
      <p>现在大多数 APP 都会直接读取这家平台有哪些员工，让它替你抄名字最稳妥。</p>
    </div>
    <ol>
      <li><span>1</span>填好 Base URL 和 API Key</li>
      <li><span>2</span>点击【拉取模型】或【刷新模型列表】</li>
      <li><span>3</span>直接从列表里选择，不要自己手打</li>
    </ol>
  </aside>
  <footer class="api-checklist">
    <span>还是用不了？</span>
    <p>按顺序检查：<strong>地址是否完整 → 密钥是否完整 → 模型是否来自正确的平台。</strong> 多数 API 问题都藏在这三处。</p>
    <a href="#购买方式说明">看懂了，返回购买方式 ↑</a>
  </footer>
</section>

## 🧠 模型选择建议

为了保证大家的体验，站内所有模型我都亲自测试筛选过。

没有完美的模型，只有最适合当下的。 如果遇到报错，请灵活切换备用渠道！

### 💰 按量计费和按次计费，怎么选？

<div class="billing-guide" aria-label="按量计费和按次计费说明">
  <p class="billing-lead">简单说：一个是按“用了多少”算钱，一个是按“发了几次”算钱。</p>
  <div class="billing-grid">
    <article class="billing-card billing-card-meter">
      <div class="billing-card-title">
        <span class="billing-card-icon" aria-hidden="true">📏</span>
        <div>
          <h4>按量计费</h4>
          <span>像看水表，用多少算多少</span>
        </div>
      </div>
      <p>这里的“输入”不只是你这一轮刚发出去的那句话。</p>
      <div class="billing-callout">
        <strong>模型能读到的，也可能算进输入</strong>
        <p>比如内部提示词、人物卡、预设、世界书，以及可读取的聊天历史。上下文越长，一轮实际用掉的量就可能越多。</p>
      </div>
      <p class="billing-card-footnote">模型最后写出来的回复也会计入消耗。适合平时短聊、想用多少付多少的人；跑长剧情时要留意余额。</p>
    </article>
    <article class="billing-card billing-card-request">
      <div class="billing-card-title">
        <span class="billing-card-icon" aria-hidden="true">🎫</span>
        <div>
          <h4>按次计费</h4>
          <span>像坐车，一次请求算一张票</span>
        </div>
      </div>
      <p>发起一次请求就收一次固定费用，通常不用一直盯着回复有多少字。</p>
      <div class="billing-callout">
        <strong>长回复、长剧情更省心</strong>
        <p>不过重新发送一次，通常就会再算一次；不同渠道的稳定性、排队情况和单次价格也可能差很多。</p>
      </div>
      <p class="billing-card-footnote">适合经常写长文、想少操心字数的人。</p>
    </article>
  </div>
  <section class="billing-choice">
    <div class="billing-choice-heading">
      <span aria-hidden="true">🧭</span>
      <div>
        <h4>可以这样选</h4>
        <p>按自己的聊天习惯挑，不用死记规则。</p>
      </div>
    </div>
    <div class="billing-choice-list">
      <div class="billing-choice-item">
        <strong>想省心跑长文</strong>
        <span>经常让模型写很多 → 优先看按次计费</span>
      </div>
      <div class="billing-choice-item">
        <strong>平时主要是短聊</strong>
        <span>想按实际用量付费 → 可以选按量计费</span>
      </div>
    </div>
    <p class="billing-note">具体价格和规则，还是以模型广场当前显示的说明为准。</p>
  </section>
</div>

:::danger
**💎 Gemini 系列 (推荐主力)**

**[企业cli] 入门基础款 (⭐⭐⭐⭐)**

评价：企业账号渠道，整体表现比较均衡，价格也比较容易接受，适合作为第一次入门的基础选择。

特点：日常聊天、轻量 RP 基本够用，限制比高阶渠道多一点，但上手简单、成本也不高。高峰期偶尔会挤，遇到 429 等一会儿或换条渠道就好。

**[build] + [ver]（Vertex 正向）摇摆渠道 (⭐⭐⭐)**

评价：这两条都属于 Gemini 的正向路线，价格不算便宜，但加甲相对薄，能用的时候比较放得开。

特点：共同特点就是“仰卧起坐”比较厉害，不一定什么时候死，也不一定什么时候活。活着时发挥不错，抽风时就换回主力，别把整段剧情全压在它们身上。

**[ais] 文笔智商兼顾 (⭐⭐⭐⭐⭐)**

评价：AI Studio 渠道。和其他基础渠道相比，脑子和文笔通常会更好一些。

特点：按量版的价格会稍微贵一点；按次版不用看字数，但目前在 Gemini 的按次渠道里不算便宜，而且偶尔会空回，需要重新发一次。

**[anti] 反重力通道 (⭐⭐⭐⭐)**

评价： 也就是 Antigravity 渠道。

特点：必须开启流式传输才能用。谷歌调整策略后偶尔会截断、空回，表现也会有些波动，适合作为备用。

**[vertex逆] 超便宜备胎 (⭐⭐⭐)**

评价：Vertex 的逆向渠道，价格非常便宜，适合低成本尝鲜，或者拿来当备用线路。

特点：便宜是它最大的优势，但稳定性和可用时间比较看运气。能用时很香，抽风时换条线路就好，不建议把它当唯一主力。

**🧠 Claude 系列 (更偏重文笔)**

**[maxcc] 综合均衡 (⭐⭐⭐⭐⭐)**

评价：文笔不如 AWS 那么细腻，不过价格和整体表现更均衡。

特点：按量计费。智商、文笔和价格都比较平衡，综合性价比是它的优势。

⚠️ 注意：价格和供应会跟着市场变化，偶尔可能缺货，使用前可以先看看模型广场。

**[特价cc] 实惠 cc (⭐⭐⭐⭐)**

评价：想少花一点尝尝 cc 的香，可以选它。

特点：和 maxcc 一样是 cc 渠道，但号池更小，稳定性也会差一点。

⚠️ 注意：其中一部分会带防封提示词，偶尔可能影响发挥，介意的话优先选 maxcc。

**[AWS] 贵妇级文笔 (⭐⭐⭐⭐⭐)**

评价：走 AWSB 正向渠道。单论文笔，它基本是贵妇级 T0，也就是第一梯队。

特点：按量计费。文笔比 maxcc 更细腻，预算充足、比较在意文字质感的话，可以优先考虑。

⚠️ 注意：价格也确实更贵，而且会受市场行情影响，使用前记得看好预算。

**[薄甲逆] 长文选手 (⭐⭐⭐⭐⭐)**

评价：限制相对宽松的逆向渠道，不少站子会把它当官方 max 卖。

特点：按次计费，不用一直盯着字数。比较能写长文，稳定性和质量也不错，适合长文本或深度剧情玩家。

**[特价aws] 质价比之选 (⭐⭐⭐⭐)**

评价：和 AWS 走的是同一条正向渠道，脑子没有缩水。

特点：按量计费。主要区别只是号池更小，所以价格更便宜一些。

⚠️ 注意：号少就更容易挤，稳定性会差一些，适合能接受偶尔换线的玩家。

**[aws逆] 实惠耐用 (⭐⭐⭐⭐)**

评价：AWS 的逆向渠道，花小钱也能用上 Claude 的好脑子。

特点：按次计费，不用盯着字数心疼钱，性价比不错。

**[anti] 反重力选手 (⭐⭐⭐⭐)**

评价：Antigravity 渠道，属于各方面都挺能打的实用派。

特点：按次计费，价格不是同类里最低的，胜在智商和使用体验比较均衡。

**[cursor] 平价聪明款 (⭐⭐⭐⭐)**

评价：同样是廉价克劳德，但脑子比 kiro 更灵光。

特点：按量计费，常用的同名型号和 kiro 价格一样，适合想省钱又不想太降智的玩家。

⚠️ 注意：稳定性会稍差一些，而且上下文最多 20 万，超长聊天记得及时总结或开新档。

**[kiro克] 平价基础款 (⭐⭐⭐)**

评价：常用的同名型号和 cursor 价格一样，不过整体智商会稍逊一点。

特点：现在改成按量计费，适合预算有限、对复杂剧情要求不高的玩家。

⚠️ 注意：价格和供应可能跟着市场变化，用之前可以在模型广场确认一下。

**🌙 其他模型推荐 (RP 向)**

**glm-5.2 国产全能选手 (⭐⭐⭐⭐⭐)**

评价：玩家口中的“哈基克”，算是国产模型里比较适合拿来跑 RP 的全能选手。

特点：按量款是智谱官方直连，支持 1M 上下文和完整推理。人物卡、世界书、剧情逻辑都能接得住，对话和场景描写也不错，综合性价比比较突出。

⚠️ 注意：按次款走的是站长自建号池，价格更省，但高峰期可能排队，稳定性也会差一点。它的文风偶尔会偏浓或复读，换套合适的预设通常会好很多。

**gemma-4-31b 现代风小能手 (⭐⭐⭐⭐)**

评价：Google 旗下的 31B 小体量模型，价格不高，写起现代人说话很有网感。

特点：校园、都市、日常聊天、网络感比较强的 RP 都挺对味，人物对话也比较活。想低成本开一段轻松的现代剧情，可以先试它。

⚠️ 注意：它大部分时间是死的，偶尔才活，能不能正常回比较看当天状态。就算活了，复杂群像、很长的世界书或超长剧情也更容易跑偏，更适合短一点、轻一点的内容。

**kimi-k3 聪明的新选手 (⭐⭐⭐⭐)**

评价：网上有人拿它和 Opus 4.7 相比。智商、剧情理解和人物细节确实有亮点，不过“能放在一起比”不代表文笔和稳定性完全一样。

特点：按次款价格比较友好，适合尝鲜或跑复杂剧情，综合性价比不错。它对人物的小心思和剧情里的细节比较敏感，写出来的味道也和常见模型不太一样。

⚠️ 注意：按量款目前确实很贵——我也没太看懂它为什么这么贵。按次款便宜不少，但稳定性稍差；长篇跑久了也可能出现重复，需要偶尔提醒它换个写法。

**grok-4.6 放得开的推进派 (⭐⭐⭐⭐)**

评价：它最大的卖点可以概括成一句话——“家里允许谈恋爱”。面对暧昧、亲密关系和比较大胆的剧情，它通常比不少模型放得开，也更愿意顺着玩家往下演。

特点：性格偏直球，接梗和推剧情都比较积极，写热烈、混乱或带点疯感的关系很有节目效果。价格放在这一档模型里也不算贵，想低成本体验高自由度 RP，综合性价比挺不错。

⚠️ 注意：它更像“先把气氛炒热再说”的选手，文风可能比较奔放、直白，细腻度不算强。目前玩家评价也比较两极，偶尔会把人物写扁、重复前文或突然换叙事方式；喜欢慢慢磨情绪、很在意文字质感的玩家，Claude 通常更合适。

**gpt-5.6-sol 清醒的剧情策划 (⭐⭐⭐⭐)**

评价：这位我天天和他打交道：脑子转得快、能吃很长的设定，但演起戏来偶尔像一位认真过头的编剧。

特点：官方定位是处理复杂专业任务，支持 1.05M 上下文。放到 RP 里，它更擅长读世界书、理清人物关系、铺剧情和接复杂指令；拿来总结长聊天或顺手处理工作，也很合适。站内目前的按量价格也比较友好。

⚠️ 注意：它不是专门为 RP 调教的，人物语气和情绪流动有时会偏正经。纯追求恋爱感、细腻文笔或沉浸闲聊，Claude、Kimi 或 Gemma 往往更对味。

**🐋 硅基流动 DeepSeek (官方5折)**

评价：价格实惠，适合需要多次重试的玩家。

特点：

✅ 官方直连： 对接硅基流动官方接口，速度快，不怎么抽风。

💰 超低折扣： 价格仅为官方定价的 5 折！(懒得去官网实名认证薅羊毛的直接用这个，比官网还便宜一半)。

📉 计费模式： 按 Token 计费（用的字数越少越便宜）。

适合谁：对“拟人感”要求不高，平时喜欢多刷新几次、慢慢挑回复的玩家。

:::

### 📝 站长碎碎念（必看！）

<section class="operator-notes" aria-label="站长使用建议与售后说明">
  <div class="operator-quick-grid">
    <article class="operator-card operator-card-stock">
      <header class="operator-card-head">
        <span class="operator-card-number">01</span>
        <div><small>关于备货</small><h4>先充十块试用</h4></div>
      </header>
      <p>API 站有香港主站和北京备用两个入口。大部分人先用主站；个别地区网络抽风，再切备用。</p>
      <strong>觉得稳、用得顺手以后再慢慢充，别一上来就囤太多。</strong>
    </article>
    <article class="operator-card operator-card-speed">
      <header class="operator-card-head">
        <span class="operator-card-number">02</span>
        <div><small>关于速度</small><h4>主站优先，备用兜底</h4></div>
      </header>
      <p>入口拆成两种走法，是为了让不同地区都有能用的选择。大部分时候比较顺畅，但当地网络情况没法完全保证。</p>
      <strong>老规矩：先试用，再囤货。</strong>
    </article>
  </div>
  <article class="operator-card operator-card-degrade">
    <header class="operator-card-head operator-card-head-wide">
      <span class="operator-card-number">03</span>
      <div><small>关于模型状态</small><h4>降智和“掺水”不是一回事</h4></div>
      <strong>一次回复变差，不能直接判定被换了模型</strong>
    </header>
    <p class="operator-lead">从玩家体感来说，新模型刚发布的第一周往往最聪明。之后随着使用人数变多、算力分散，服务端资料和策略也持续调整，表现可能慢慢回落。大家说的“资料库污染”，就是在形容资料和反馈混入噪声后，模型越来越爱写八股文、套固定模板的感觉。</p>
    <div class="degrade-flow" aria-label="模型状态容易变化的三个阶段">
      <div><span>发布首周</span><strong>通常最惊艳</strong><small>资源相对集中，模型的新鲜感最强</small></div>
      <div><span>每天高峰</span><strong>可能临时变笨</strong><small>同时使用的人太多，算力被摊开</small></div>
      <div><span>换代之前</span><strong>旧模型容易波动</strong><small>格式、记忆和文风问题会更明显</small></div>
    </div>
    <div class="degrade-symptoms">
      <strong>常见表现</strong>
      <ul>
        <li>原本守得好好的格式突然疯狂掉</li>
        <li>不读人物卡和世界书，前后设定对不上</li>
        <li>反复使用同一套句子，八股味越来越重</li>
        <li>上下文接不住，甚至开始胡言乱语</li>
      </ul>
      <p>可以换个时间、重新开一段对话，或切备用渠道对比。别只凭一次回复就急着下结论。</p>
    </div>
    <div class="degrade-compare">
      <section class="degrade-definition degrade-definition-soft">
        <span>降智</span>
        <strong>还是原来的员工，只是状态变差</strong>
        <p>可能是当天太忙、算力紧张，或者公司调整了它的工作方式。</p>
      </section>
      <section class="degrade-definition degrade-definition-watered">
        <span>掺水</span>
        <strong>标牌没变，背后却长期换了员工</strong>
        <p>例如换成别的模型，或把不同模型混在一起轮流回信。</p>
      </section>
    </div>
    <aside class="degrade-evidence">
      <div><span>别这样测</span><strong>直接问模型“你是谁”</strong><p>模型通常看不到后台真实版本，只会根据提示词猜。注入一句身份说明，它就可能照着回答。</p></div>
      <div><span>更有参考价值</span><strong>看报错、限流与道歉信息</strong><p>如果挂着 A 模型的名字，却在不同时段反复出现只有 B 渠道才有的提示，才更接近“石锤”。</p></div>
    </aside>
  </article>
  <article class="operator-card operator-card-support">
    <header class="operator-card-head operator-card-head-wide">
      <span class="operator-card-number">04</span>
      <div><small>关于售后</small><h4>驴不是 24 小时客服团队</h4></div>
    </header>
    <p class="operator-lead">本杰驴的站子看起来花里胡哨，是因为驴在成为文游打工人之前做的是品牌策划。预言家 TV 旗下的游戏和网站，都是驴一个人在运营维护，并没有成熟的商业化团队。</p>
    <p>群里的管理员也是为爱发电的老玩家，没有后台权限，更不是 24 小时在线的专业客服。大家可以这样分工：</p>
    <div class="support-routes">
      <section>
        <span>先问老玩家</span>
        <strong>基础配置问题</strong>
        <p>Base URL 怎么填、密钥放哪里、怎么拉取模型，可以先看教程或在群里求助。</p>
      </section>
      <section>
        <span>直接找本杰驴</span>
        <strong>充值、退款和疑难报错</strong>
        <p>充值没到账、退款、异常扣费、反复报错等问题，管理员没有权限处理。</p>
      </section>
    </div>
    <footer class="support-checklist"><span>来找驴时请带上</span><strong>报错截图 · 发生时间 · 模型完整名称 · 使用渠道</strong><p>完整 API Key 不要发在群里，先把自己的魔法钥匙收好。🫡</p></footer>
  </article>
</section>
