import {
  firebase,
  auth,
  db,
  storageRef,
  googleAuthProvider,
  facebookAuthProvider,
} from "auth/FirebaseAuth";
const FirebaseService = {};

FirebaseService.signInEmailRequest = async (email, password) =>
  await auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => user)
    .catch((err) => err);

FirebaseService.signOutRequest = async () =>
  await auth
    .signOut()
    .then((user) => user)
    .catch((err) => err);

FirebaseService.signInGoogleRequest = async () =>
  await auth
    .signInWithPopup(googleAuthProvider)
    .then((user) => user)
    .catch((err) => err);

FirebaseService.signInFacebookRequest = async () =>
  await auth
    .signInWithPopup(facebookAuthProvider)
    .then((user) => user)
    .catch((err) => err);

FirebaseService.signUpEmailRequest = async (email, password) =>
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => user)
    .catch((err) => err);

const getFirestoreRef = (path) => firebase.firestore().collection(path);

FirebaseService.fetchDocument = async (collection, id) => {
  const document = await getFirestoreRef(collection).doc(id).get();
  if (!document.exists) return null;
  return { id: document.id, ...document.data() };
};

FirebaseService.fetchCollection = async (collection, options = {}) => {
  const data = [];
  let baseQuery = getFirestoreRef(collection);

  if (options.queries) {
    const { queries } = options;

    queries.forEach(({ attribute, operator, value }) => {
      if (attribute === "uid")
        attribute = firebase.firestore.FieldPath.documentId();
      baseQuery = baseQuery.where(attribute, operator, value);
    });
  }

  if (options.sort) {
    const { attribute, order } = options.sort;
    baseQuery = baseQuery.orderBy(attribute, order);
  }

  (await baseQuery.get()).forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
};

FirebaseService.uploadImage = async (fileName, file) => {
  let url = await storageRef.ref("uploads").child(fileName).put(file);
  return url.ref.getDownloadURL();
};

FirebaseService.addLawyerCategory = async (categoryName, categoryTranslation, categoryDescription, categoryDescriptionAr, iconUrl) => {
  try {
    await db.collection("LawyerCategory").add({
      categoryName,
      categoryTranslation,
      categoryDescription,
      categoryDescriptionAr,
      iconUrl,
    });
  } catch (error) {
    throw error;
  }
};

FirebaseService.addCountry = async (countryName, countryTranslation, iconUrl) => {
  try {
    await db.collection("Country").add({
      countryName,
      countryTranslation,
      iconUrl,
    });
  } catch (error) {
    throw error;
  }
};

FirebaseService.getLawyerCategory = async (countryId) =>{
     try {
    return await db.collection("LawyerCategory").doc(countryId).get();
  } catch (error) {
    throw error;
  }
};

FirebaseService.getCountry = async (countryId) =>{
  try {
    return await db.collection("Country").doc(countryId).get();
  } catch (error) {
  throw error;
  }
};

FirebaseService.removeLawyerCategory = async (categoryId) => {
  try {
    await db.collection("LawyerCategory").doc(categoryId).delete();
  } catch (error) {
    throw error;
  }
};

FirebaseService.removeCountry = async (countryId) => {
  try {
    await db.collection("Country").doc(countryId).delete();
  } catch (error) {
    throw error;
  }
};

FirebaseService.editLawyerCategory = async (id, categoryName, categoryTranslation, categoryDescription, categoryDescriptionAr, iconUrl) => {
  try {
    if (iconUrl == null) {
      await db.collection("LawyerCategory").doc(id).update({
        categoryName,
        categoryTranslation,
        categoryDescription,
        categoryDescriptionAr,
      });
    } else {
      await db.collection("LawyerCategory").doc(id).set({
        categoryName,
        categoryTranslation,
        categoryDescription,
        categoryDescriptionAr,
        iconUrl,
      });
    }
  } catch (error) {
    throw error;
  }
};

FirebaseService.editCountry = async (id, countryName, countryTranslation, iconUrl) => {
  try {
    if (iconUrl == null) {
      await db.collection("Country").doc(id).update({
        countryName,
        countryTranslation,
    
      });
    } else {
      await db.collection("Country").doc(id).set({
        countryName,
        countryTranslation,
        iconUrl,
      });
    }
  } catch (error) {
    throw error;
  }
};


FirebaseService.removeTopRatedLawyer = async (topRatedId) => {
  try {
    let snapshot = await db
      .collection("TopRatedLawyer")
      .where("lawyerId", "==", topRatedId)
      .get();
    await snapshot.docs.at(0).ref.delete();
  } catch (error) {
    console.log(
      "🚀 ~ file: FirebaseService.js ~ line 124 ~ FirebaseService.removeTopRatedLawyer= ~ error",
      error
    );

    throw error;
  }
};

FirebaseService.addTopRatedLawyer = async (lawyerId) => {
  try {
    await db.collection("TopRatedLawyer").add({ lawyerId });
  } catch (error) {
    throw error;
  }
};

FirebaseService.deleteLawyerAccount = async (lawyerId) => {
  try {
    var addMessage = firebase.functions().httpsCallable("deleteLawyer");
    await addMessage({ lawyerId: lawyerId });
    console.log("delete lawyer");
  } catch (error) {
    console.log(
      "🚀 ~ file: FirebaseService.js ~ line 160 ~ FirebaseService.deleteLawyerAccount ~ error",
      error
    );
    throw error;
  }
};
FirebaseService.deleteUser = async (userId) => {
  try {
    var addMessage = firebase.functions().httpsCallable("deleteUser");
    await addMessage({ userId: userId });
    console.log("delete user");
  } catch (error) {
    console.log(
      "🚀 ~ file: FirebaseService.js ~ line 160 ~ FirebaseService.deleteLawyerAccount ~ error",
      error
    );
    throw error;
  }
};

FirebaseService.countCollection = async (documentName) => {
  let size = await db
    .collection(documentName)
    .get()
    .then((snap) => {
      return snap.size; // will return the collection size
    });
  return size;
};

FirebaseService.setPercentage = async (data) => {
  await db
    .collection("Settings")
    .doc("withdrawSetting")
    .set({ percentage: data.data.percentage, tax: data.data.tax });
};

FirebaseService.getWithdrawalSettings = async () => {
  try {
    let snapshot = await db.collection("Settings").doc("withdrawSetting").get();
    if (!snapshot.exists) return {};
    return snapshot.data();
  } catch (error) {
    console.log(
      "🚀 ~ file: FirebaseService.js ~ line 206 ~ FirebaseService.getWithdrawalSettings= ~ error",
      error
    );
    throw error;
  }
};
FirebaseService.getImageCarousel = async () => {
  try {
    let data = [];
    let snapshot = await db
      .collection("Settings")
      .doc("imageCarousel")
      .collection("listImage")
      .get();
    console.log(
      "🚀 ~ file: FirebaseService.js ~ line 213 ~ FirebaseService.getImageCarousel= ~ snapshot",
      snapshot.docs
    );
    snapshot.docs.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.log(
      "🚀 ~ file: FirebaseService.js ~ line 212 ~ FirebaseService.getImageCarousel= ~ error",
      error
    );
    throw error;
  }
};
FirebaseService.removeImageCarousel = async (data) => {
  console.log(
    "🚀 ~ file: FirebaseService.js ~ line 232 ~ FirebaseService.removeImageCarousel= ~ data",
    data
  );
  try {
    await db
      .collection("Settings")
      .doc("imageCarousel")
      .collection("listImage")
      .doc(data.data.imageId)
      .delete();

    let picRef = storageRef.refFromURL(data.data.imageUrl);
    picRef.delete();
  } catch (error) {
    throw error;
  }
};
FirebaseService.saveImageCarouselData = async (data) => {
  try {
    await db
      .collection("Settings")
      .doc("imageCarousel")
      .collection("listImage")
      .add({
        imageUrl: data.imageUrl,
        fileName: data.fileName,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
      });
  } catch (error) {
    console.log(
      "🚀 ~ file: FirebaseService.js ~ line 231 ~ FirebaseService.saveImageCarouselData= ~ error",
      error
    );
    throw error;
  }
};

FirebaseService.markWithdrawalRequestComplete = async (record) => {
  try {
    await db
      .collection("WithdrawRequest")
      .doc(record.id)
      .update({ status: "complete" });

    let transactionSnapshot = await db
      .collection("Transaction")
      .where("withdrawRequestId", "==", record.id)
      .get();
    if (transactionSnapshot.empty) return;
    transactionSnapshot.docs[0].ref.update({ status: "success" });
  } catch (error) {
    console.log(
      "🚀 ~ file: FirebaseService.js ~ line 224 ~ FirebaseService.markWithdrawalRequestComplete ~ error",
      error
    );

    throw error;
  }
};
FirebaseService.setLawyerAccountStatus = async (record, status) => {
  try {
    await db
      .collection("Lawyers")
      .doc(record)
      .update({ accountStatus: status });
  } catch (error) {
    console.log(
      "🚀 ~ file: FirebaseService.js ~ line 240 ~ FirebaseService.setLawyerAccountStatus= ~ error",
      error
    );

    throw error;
  }
};

export default FirebaseService;
