# emoji-as-a-service

### The problem

Platforms have different emoji sets that can have wildly different appearances and meanings. Some platforms don't support emojis at all. Sometimes, you want everyone to get the same experience you had when designing a page that includes an emoji.

### The solution

You can use `emoji-as-a-service` to fetch predictable, high-res emoji images. Emojis are available by using their standardized handles ([browse handles here!](https://emoji.muan.co)). For example, to get the `:mount_fuji:` emoji:

```
https://emoji.veryfunparty.com/i/mount_fuji
```

You can use the URLs in `img` tags on the web:

<table>
  <thead>
    <tr>
      <th>Markup</th>
      <th>Image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>&lt;img src="https://emoji.veryfunparty.com/i/tada" /&gt;</code></td>
      <td><img src="https://emoji.veryfunparty.com/i/tada" width="75px" /></td>
    </tr>
    <tr>
      <td><code>&lt;img src="https://emoji.veryfunparty.com/i/sparkles" /&gt;</code></td>
      <td><img src="https://emoji.veryfunparty.com/i/sparkles" width="75px" /></td>
    </tr>
    <tr>
      <td><code>&lt;img src="https://emoji.veryfunparty.com/i/tangerine" /&gt;</code></td>
      <td><img src="https://emoji.veryfunparty.com/i/tangerine" width="75px" /></td>
    </tr>
  </tbody>
</table>
