<template>
  <div class="account-information-container">
    <h3>Personal information</h3>
    <div class="info-containers-wrapper">
      <div class="info-container">
        <p>User ID</p>
        <div class="data-container">
          <p class="data">007</p>
        </div>
      </div>
      <div class="info-container">
        <p>Fullname</p>
        <div class="data-container">
          <p class="data">{{ userInfo.lastName }} {{ userInfo.firstName }}</p>
          <AppButton class="edit-btn" btn-style="approve" @click="editUserName">Edit</AppButton>
        </div>
      </div>
      <div class="info-container">
        <p>E-mail</p>
        <div class="data-container">
          <p class="data">{{ userInfo.email }}</p>
          <AppButton class="edit-btn" btn-style="approve" @click="editEmail">Edit</AppButton>
        </div>
      </div>
      <div class="info-container">
        <p>Phone number</p>
        <div class="data-container">
          <p class="data">{{ userInfo.phoneNr }}</p>
          <AppButton class="edit-btn" btn-style="approve" @click="editPhoneNr">Edit</AppButton>
        </div>
      </div>
      <div class="info-container">
        <p>Date of birth</p>
        <div class="data-container">
          <p class="data">{{ userInfo.birthDate }}</p>
          <AppButton class="edit-btn" btn-style="approve" @click="editDateOfBirth">Edit</AppButton>
        </div>
      </div>
      <div class="info-container">
        <p>Sex</p>
        <div class="data-container">
          <p class="data">{{ userInfo.sex }}</p>
          <AppButton class="edit-btn" btn-style="approve" @click="editSex">Edit</AppButton>
        </div>
      </div>
      <div class="info-container">
        <p>Password</p>
        <div class="data-container">
          <p class="data">{{ userInfo.password }}</p>
          <AppButton class="edit-btn" btn-style="cancel" @click="editPassword">Change password</AppButton>
        </div>
      </div>
    </div>
    <h3>Privacy information</h3>
    <div class="privacy-container-wrapper">
      <AppButton class="edit-btn" btn-style="approve">Request collected personal data</AppButton>
      <AppButton class="edit-btn" btn-style="cancel">Delete profile</AppButton>
    </div>
    <div>
      <EditUserNameModal :show-user-name-modal="showUserNameModal" @save="showUserNameModal = !showUserNameModal" @cancel="showUserNameModal = !showUserNameModal" />
      <EditEmailModal :show-email-modal="showEmailModal" @save="showEmailModal = !showEmailModal" @cancel="showEmailModal = !showEmailModal" />
      <EditPhoneNrModal :show-phone-nr-modal="showPhoneNrModal" @save="showPhoneNrModal = !showPhoneNrModal" @cancel="showPhoneNrModal = !showPhoneNrModal" />
      <EditDateOfBirthModal :show-date-of-birth-modal="showDateOfBirthModal" @save="showDateOfBirthModal = !showDateOfBirthModal" @cancel="showDateOfBirthModal = !showDateOfBirthModal" />
      <EditSexModal :show-sex-modal="showSexModal" @save="showSexModal = !showSexModal" @cancel="showSexModal = !showSexModal" />
      <EditPasswordModal :show-password-modal="showPasswordModal" @save="showPasswordModal = !showPasswordModal" @cancel="showPasswordModal = !showPasswordModal" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: [],
      showUserNameModal: false,
      showEmailModal: false,
      showPhoneNrModal: false,
      showDateOfBirthModal: false,
      showSexModal: false,
      showPasswordModal: false
    }
  },
  computed: {
    hiddenPassword() {
      return 'hiddenPassworddd'
    }
  },
  created() {
    this.userInfo = this.$store.getters.getUserInformation
  },
  methods: {
    editUserName() {
      this.showUserNameModal = !this.showUserNameModal
    },
    editEmail() {
      this.showEmailModal = !this.showEmailModal
    },
    editPhoneNr() {
      this.showPhoneNrModal = !this.showPhoneNrModal
    },
    editDateOfBirth() {
      this.showDateOfBirthModal = !this.showDateOfBirthModal
    },
    editSex() {
      this.showSexModal = !this.showSexModal
    },
    editPassword() {
      this.showPasswordModal = !this.showPasswordModal
    }
  }
}
</script>

<style scoped lang="scss">
.account-information-container {
  min-width: 300px;
  width: 500px;
  margin-bottom: 30px;
  padding: 0 1rem;
}
h3 {
  padding-left: 10px;
  margin: 15px 0 7px 0;
}
.info-containers-wrapper {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.219);
  border-radius: 3px;
}
.info-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
.data-container {
  display: flex;
  flex-direction: row;
}
p {
  margin: 0 0 0 10px;
  font-weight: 550;
}
.edit-btn {
  font-weight: 500;
  margin: 5px;
  padding: 3px 7px !important;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.26) !important;
}
.data {
  font-weight: 500;
  margin: 5px 0;
  padding: 3px 10px;
}
.privacy-container-wrapper {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.219);
  border-radius: 3px;
  padding: 10px 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 30px;
}
</style>
