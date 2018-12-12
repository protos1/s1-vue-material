<template>
  <div>
    <h1 class="md-display-3">Inputs</h1>
    <div class="s1-U__pd16 s1-U__width--300px">
      <md-field>
        <label>Initial Value</label>
        <md-input v-model="initial"></md-input>
      </md-field>

      <md-field>
        <label>Initial Value (Read Only)</label>
        <md-input v-model="initial" readonly></md-input>
      </md-field>

      <md-field class="s1-U__flex-wrap">
        <label>Type here!</label>
        <md-input v-model="type"></md-input>
        <span class="md-helper-text">Helper text</span>
      </md-field>

      <md-field>
        <label>With label</label>
        <md-input v-model="withLabel" placeholder="A nice placeholder"></md-input>
      </md-field>

      <md-field md-inline>
        <label>Inline</label>
        <md-input v-model="inline"></md-input>
      </md-field>

      <md-field>
        <label>Number</label>
        <md-input v-model="number" type="number"></md-input>
      </md-field>

      <md-field>
        <label>Textarea</label>
        <md-textarea v-model="textarea"></md-textarea>
      </md-field>

      <md-field>
        <label>Textarea with Autogrow</label>
        <md-textarea v-model="autogrow" md-autogrow></md-textarea>
      </md-field>

      <md-field>
        <label>Disabled</label>
        <md-input v-model="disabled" disabled></md-input>
      </md-field>

      <md-field>
        <label>No error</label>
        <md-input v-model="noError"></md-input>
      </md-field>

      <md-field :class="messageClass">
        <label>Required Field</label>
        <md-input v-model="required" required></md-input>
        <span class="md-error">There is an error</span>
      </md-field>

      <md-field :class="messageClass" class="s1-U__flex-wrap">
        <label>Textarea</label>
        <md-textarea v-model="textarea" required></md-textarea>
        <span class="md-helper-text">Helper text</span>
        <span class="md-error">There is an error</span>
      </md-field>

      <md-switch v-model="hasMessages">{{ !hasMessages ? 'Show' : 'Hide' }} Errors</md-switch>

      <md-field class="s1-U__flex-wrap">
        <label>Counter</label>
        <md-input v-model="regular" md-counter="30"></md-input>
      </md-field>

      <md-field class="s1-U__flex-wrap">
        <label>Max Length</label>
        <md-input v-model="maxLength" maxlength="30"></md-input>
      </md-field>

      <md-field :md-counter="false" class="s1-U__flex-wrap">
        <label>Maxlength with disabled counter</label>
        <md-input v-model="disabled" maxlength="10"></md-input>
      </md-field>

      <md-field class="s1-U__flex-wrap">
        <label>Autogrow</label>
        <md-textarea v-model="autogrow" md-autogrow md-counter="200"></md-textarea>
      </md-field>

      <md-field class="s1-U__flex-wrap">
        <label>Textarea</label>
        <md-textarea v-model="textarea" md-counter="80"></md-textarea>
      </md-field>

      <md-field>
        <md-icon>event</md-icon>
        <label>Date</label>
        <md-input v-model="date"></md-input>
      </md-field>

      <md-field>
        <label>Voice</label>
        <md-input v-model="voice"></md-input>
        <md-icon>keyboard_voice</md-icon>
      </md-field>

      <md-field>
        <label>Description</label>
        <md-textarea v-model="description"></md-textarea>
        <md-icon>description</md-icon>
      </md-field>

      <md-field>
        <md-icon class="md-accent">warning</md-icon>
        <label>Transfer Money</label>
        <md-input v-model="money"></md-input>
        <md-icon>attach_money</md-icon>
      </md-field>

      <md-field md-clearable>
        <label>Cleareable</label>
        <md-input v-model="initial"></md-input>
      </md-field>

      <md-field>
        <label>Password toggle</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>

      <md-field :md-toggle-password="false">
        <label>Password field without toggle</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>

      <md-field>
        <label>Prefix</label>
        <span class="md-prefix">$</span>
        <md-input v-model="initial"></md-input>
      </md-field>

      <md-field>
        <label>Suffix</label>
        <md-input v-model="empty"></md-input>
        <span class="md-suffix">@gmail.com</span>
      </md-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "MdFieldDoc",
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
    hasMessages: false
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

