<template>
  <div class="section" id="input-textarea">
    <h1 class="md-display-3 s1-U__mg--bt16">Input & Textarea</h1>

    <div class="s1-U__mg--bt16">
      <a class="s1-U__text-ellipsis s1-U__full-width" target="_blank" href="https://vuematerial.io/components/input">vuematerial.io/input</a>
    </div>

    <div class="s1-U__mg--bt64">
      <h2 class="md-display-1 s1-U__mg--bt8">1. Input</h2>
      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field>
            <label>Initial Value</label>
            <md-input v-model="initial"></md-input>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;label&#x3E;Initial Value&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;initial&#x22;&#x3E;&#x3C;/md-input&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field>
            <label>Initial Value (Read Only)</label>
            <md-input v-model="initial" readonly></md-input>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;label&#x3E;Initial Value (Read Only)&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;initial&#x22; readonly&#x3E;&#x3C;/md-input&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field class="md-field-helper-text">
            <label>Type here!</label>
            <md-input v-model="type"></md-input>
            <span class="md-helper-text">Helper text</span>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field class=&#x22;md-field-helper-text&#x22;&#x3E;
  &#x3C;label&#x3E;Type here!&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;type&#x22;&#x3E;&#x3C;/md-input&#x3E;
  &#x3C;span class=&#x22;md-helper-text&#x22;&#x3E;Helper text&#x3C;/span&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field>
            <label>With label</label>
            <md-input v-model="withLabel" placeholder="A nice placeholder"></md-input>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;label&#x3E;With label&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;withLabel&#x22; placeholder=&#x22;A nice placeholder&#x22;&#x3E;&#x3C;/md-input&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field md-inline>
            <label>Inline</label>
            <md-input v-model="inline"></md-input>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field md-inline&#x3E;
  &#x3C;label&#x3E;Inline&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;inline&#x22;&#x3E;&#x3C;/md-input&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field>
            <label>Number</label>
            <md-input v-model="number" type="number"></md-input>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;label&#x3E;Number&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;number&#x22; type=&#x22;number&#x22;&#x3E;&#x3C;/md-input&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <md-switch v-model="hasMessages">{{ !hasMessages ? 'Show' : 'Hide' }} Errors</md-switch>
        <div class="s1-U__width--300px">
          <md-field>
            <label>No error</label>
            <md-input v-model="noError"></md-input>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;label&#x3E;No error&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;noError&#x22;&#x3E;&#x3C;/md-input&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <md-switch v-model="hasMessages">{{ !hasMessages ? 'Show' : 'Hide' }} Errors</md-switch>
        <div class="s1-U__width--300px">
          <md-field :class="messageClass">
            <label>Required Field</label>
            <md-input v-model="required" required></md-input>
            <span class="md-error">There is an error</span>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field :class=&#x22;messageClass&#x22;&#x3E;
  &#x3C;label&#x3E;Required Field&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;required&#x22; required&#x3E;&#x3C;/md-input&#x3E;
  &#x3C;span class=&#x22;md-error&#x22;&#x3E;There is an error&#x3C;/span&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <md-switch v-model="hasMessages">{{ !hasMessages ? 'Show' : 'Hide' }} Errors</md-switch>
        <div class="s1-U__width--300px">
          <md-field :class="messageClass" class="md-field-helper-text">
            <label>Textarea</label>
            <md-textarea v-model="textarea" required></md-textarea>
            <span class="md-helper-text">Helper text</span>
            <span class="md-error">There is an error</span>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field :class=&#x22;messageClass&#x22; class=&#x22;md-field-helper-text&#x22;&#x3E;
  &#x3C;label&#x3E;Textarea&#x3C;/label&#x3E;
  &#x3C;md-textarea v-model=&#x22;textarea&#x22; required&#x3E;&#x3C;/md-textarea&#x3E;
  &#x3C;span class=&#x22;md-helper-text&#x22;&#x3E;Helper text&#x3C;/span&#x3E;
  &#x3C;span class=&#x22;md-error&#x22;&#x3E;There is an error&#x3C;/span&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field class="md-field-helper-text">
            <label>Counter</label>
            <md-input v-model="regular" md-counter="30"></md-input>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field class=&#x22;md-field-helper-text&#x22;&#x3E;
  &#x3C;label&#x3E;Counter&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;regular&#x22; md-counter=&#x22;30&#x22;&#x3E;&#x3C;/md-input&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field class="md-field-helper-text">
            <label>Max Length</label>
            <md-input v-model="maxLength" maxlength="30"></md-input>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field class=&#x22;md-field-helper-text&#x22;&#x3E;
  &#x3C;label&#x3E;Max Length&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;maxLength&#x22; maxlength=&#x22;30&#x22;&#x3E;&#x3C;/md-input&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field :md-counter="false" class="md-field-helper-text">
            <label>Maxlength with disabled counter</label>
            <md-input v-model="disabled" maxlength="10"></md-input>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field :md-counter=&#x22;false&#x22; class=&#x22;md-field-helper-text&#x22;&#x3E;
  &#x3C;label&#x3E;Maxlength with disabled counter&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;disabled&#x22; maxlength=&#x22;10&#x22;&#x3E;&#x3C;/md-input&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field>
            <md-icon>event</md-icon>
            <label>Date</label>
            <md-input v-model="date"></md-input>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;md-icon&#x3E;event&#x3C;/md-icon&#x3E;
  &#x3C;label&#x3E;Date&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;date&#x22;&#x3E;&#x3C;/md-input&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field>
            <label>Voice</label>
            <md-input v-model="voice"></md-input>
            <md-icon>keyboard_voice</md-icon>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;label&#x3E;Voice&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;voice&#x22;&#x3E;&#x3C;/md-input&#x3E;
  &#x3C;md-icon&#x3E;keyboard_voice&#x3C;/md-icon&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field>
            <md-icon class="md-accent">warning</md-icon>
            <label>Transfer Money</label>
            <md-input v-model="money"></md-input>
            <md-icon>attach_money</md-icon>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;md-icon class=&#x22;md-accent&#x22;&#x3E;warning&#x3C;/md-icon&#x3E;
  &#x3C;label&#x3E;Transfer Money&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;money&#x22;&#x3E;&#x3C;/md-input&#x3E;
  &#x3C;md-icon&#x3E;attach_money&#x3C;/md-icon&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field md-clearable>
            <label>Cleareable</label>
            <md-input v-model="initial"></md-input>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field md-clearable&#x3E;
  &#x3C;label&#x3E;Cleareable&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;initial&#x22;&#x3E;&#x3C;/md-input&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field>
            <label>Password toggle</label>
            <md-input v-model="password" type="password"></md-input>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;label&#x3E;Password toggle&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;password&#x22; type=&#x22;password&#x22;&#x3E;&#x3C;/md-input&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field :md-toggle-password="false">
            <label>Password field without toggle</label>
            <md-input v-model="password" type="password"></md-input>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field :md-toggle-password=&#x22;false&#x22;&#x3E;
  &#x3C;label&#x3E;Password field without toggle&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;password&#x22; type=&#x22;password&#x22;&#x3E;&#x3C;/md-input&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field>
            <label>Prefix</label>
            <span class="md-prefix">$</span>
            <md-input v-model="initial"></md-input>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;label&#x3E;Prefix&#x3C;/label&#x3E;
  &#x3C;span class=&#x22;md-prefix&#x22;&#x3E;$&#x3C;/span&#x3E;
  &#x3C;md-input v-model=&#x22;initial&#x22;&#x3E;&#x3C;/md-input&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field>
            <label>Suffix</label>
            <md-input v-model="empty"></md-input>
            <span class="md-suffix">@gmail.com</span>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;label&#x3E;Suffix&#x3C;/label&#x3E;
  &#x3C;md-input v-model=&#x22;empty&#x22;&#x3E;&#x3C;/md-input&#x3E;
  &#x3C;span class=&#x22;md-suffix&#x22;&#x3E;@gmail.com&#x3C;/span&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>
    </div>

    <div>
      <h2 class="md-display-1 s1-U__mg--bt8">2. Textarea</h2>
      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field>
            <label>Textarea</label>
            <md-textarea v-model="textarea"></md-textarea>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;label&#x3E;Textarea&#x3C;/label&#x3E;
  &#x3C;md-textarea v-model=&#x22;textarea&#x22;&#x3E;&#x3C;/md-textarea&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field>
            <label>Textarea with Autogrow</label>
            <md-textarea v-model="autogrow" md-autogrow></md-textarea>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;label&#x3E;Textarea with Autogrow&#x3C;/label&#x3E;
  &#x3C;md-textarea v-model=&#x22;autogrow&#x22; md-autogrow&#x3E;&#x3C;/md-textarea&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field class="md-field-helper-text">
            <label>Textarea</label>
            <md-textarea v-model="textarea" required></md-textarea>
            <span class="md-helper-text">Helper text</span>
            <span class="md-error">There is an error</span>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field class=&#x22;md-field-helper-text&#x22;&#x3E;
  &#x3C;label&#x3E;Textarea&#x3C;/label&#x3E;
  &#x3C;md-textarea v-model=&#x22;textarea&#x22; required&#x3E;&#x3C;/md-textarea&#x3E;
  &#x3C;span class=&#x22;md-helper-text&#x22;&#x3E;Helper text&#x3C;/span&#x3E;
  &#x3C;span class=&#x22;md-error&#x22;&#x3E;There is an error&#x3C;/span&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field class="md-field-helper-text">
            <label>Autogrow</label>
            <md-textarea v-model="autogrow" md-autogrow md-counter="200"></md-textarea>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field class=&#x22;md-field-helper-text&#x22;&#x3E;
  &#x3C;label&#x3E;Autogrow&#x3C;/label&#x3E;
  &#x3C;md-textarea v-model=&#x22;autogrow&#x22; md-autogrow md-counter=&#x22;200&#x22;&#x3E;&#x3C;/md-textarea&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field class="md-field-helper-text">
            <label>Textarea</label>
            <md-textarea v-model="textarea" md-counter="80"></md-textarea>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field class=&#x22;md-field-helper-text&#x22;&#x3E;
  &#x3C;label&#x3E;Textarea&#x3C;/label&#x3E;
  &#x3C;md-textarea v-model=&#x22;textarea&#x22; md-counter=&#x22;80&#x22;&#x3E;&#x3C;/md-textarea&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>

      <div class="s1-U__mg--bt64">
        <div class="s1-U__width--300px">
          <md-field>
            <label>Description</label>
            <md-textarea v-model="description"></md-textarea>
            <md-icon>description</md-icon>
          </md-field>
        </div>
        <div class="s1-Doc-code-wrapper">
          <code>
&#x3C;md-field&#x3E;
  &#x3C;label&#x3E;Description&#x3C;/label&#x3E;
  &#x3C;md-textarea v-model=&#x22;description&#x22;&#x3E;&#x3C;/md-textarea&#x3E;
  &#x3C;md-icon&#x3E;description&#x3C;/md-icon&#x3E;
&#x3C;/md-field&#x3E;
          </code>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MdInputTextareaDoc",
  data: () => ({
    initial: "Initial Value",
    type: null,
    withLabel: null,
    inline: null,
    number: null,
    textarea: null,
    autogrow: null,
    disabled: null,
    noError: null,
    required: null,
    hasMessages: false,
    regular: null,
    maxLength: null,
    date: null,
    voice: null,
    description: null,
    money: null,
    password: null,
    empty: null
  }),
  computed: {
    messageClass() {
      return {
        "md-invalid": this.hasMessages
      };
    }
  }
};
</script>