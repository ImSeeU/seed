<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:" label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email" v-model="form.email" required
                      placeholder="Enter email" 
        ></b-form-input>
      </b-form-group>
      
      
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:" label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text" v-model="form.name" required
                      placeholder="Enter name"
        ></b-form-input>
    </b-form-group>
    
    
    <b-form-group id="exampleInputGroup2"
                    label="Subject:" label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text" v-model="form.name" required
                      placeholder="Enter subject"
        ></b-form-input>
    </b-form-group>
    
    
     <b-form-group id="exampleInputGroup2"
                    label="Email:" label-for="exampleInput2">
       <b-form-textarea id="textarea1"
                     v-model="form.content" required
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
        </b-form-textarea>
            <pre class="mt-3">{{ content }}</pre>
    </b-form-group>
    
       <br>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="secondary">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import bForm from 'bootstrap-vue/es/components/form/form'

  export default {
    data: function() {
      return{
        form: {
          email: '',
          name: '',
          subject: "",
          content: "",
          checked: false,
          secret: 'S3CR3T'
        },
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      }
    }
  };
</script>

<style type="text/css">
  .form-control {
    width: 80%
}


</style>