// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";

import * as firestore from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDi1JRtomTjz1gp77vtUpsTkv6jvKnPjLg",

  authDomain: "qna-fac25.firebaseapp.com",

  projectId: "qna-fac25",

  storageBucket: "qna-fac25.appspot.com",

  messagingSenderId: "519204418441",

  appId: "1:519204418441:web:60ae01f0a953439e5aa758",

  measurementId: "G-7DT7D9MS4Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firestore.getFirestore(app);

export { app, db, firestore };

// export {
//   jh as AbstractUserDataWriter,
//   qc as Bytes,
//   Ac as CACHE_SIZE_UNLIMITED,
//   _c as CollectionReference,
//   fc as DocumentReference,
//   Th as DocumentSnapshot,
//   Lc as FieldPath,
//   Gc as FieldValue,
//   Rc as Firestore,
//   Q as FirestoreError,
//   Kc as GeoPoint,
//   Ec as LoadBundleTask,
//   dc as Query,
//   Vh as QueryConstraint,
//   Eh as QueryDocumentSnapshot,
//   Ah as QuerySnapshot,
//   Ih as SnapshotMetadata,
//   at as Timestamp,
//   fl as Transaction,
//   Hh as WriteBatch,
//   vt as _DatabaseId,
//   xt as _DocumentKey,
//   et as _EmptyAppCheckTokenProvider,
//   z as _EmptyAuthCredentialsProvider,
//   mt as _FieldPath,
//   uc as _cast,
//   q as _debugAssert,
//   yt as _isBase64Available,
//   $ as _logWarn,
//   Il as _setIndexConfiguration,
//   sc as _validateIsNotUsedTogether,
//   ul as addDoc,
//   gl as arrayRemove,
//   ml as arrayUnion,
//   xc as clearIndexedDbPersistence,
//   wc as collection,
//   mc as collectionGroup,
//   lc as connectFirestoreEmulator,
//   ol as deleteDoc,
//   _l as deleteField,
//   Mc as disableNetwork,
//   gc as doc,
//   Uc as documentId,
//   Sc as enableIndexedDbPersistence,
//   Dc as enableMultiTabIndexedDbPersistence,
//   kc as enableNetwork,
//   Uh as endAt,
//   Lh as endBefore,
//   Vc as ensureFirestoreConfigured,
//   hl as executeWrite,
//   Yh as getDoc,
//   Zh as getDocFromCache,
//   tl as getDocFromServer,
//   el as getDocs,
//   nl as getDocsFromCache,
//   sl as getDocsFromServer,
//   Pc as getFirestore,
//   yl as increment,
//   bc as initializeFirestore,
//   kh as limit,
//   Mh as limitToLast,
//   Fc as loadBundle,
//   $c as namedQuery,
//   al as onSnapshot,
//   cl as onSnapshotsInSync,
//   xh as orderBy,
//   vh as query,
//   pc as queryEqual,
//   yc as refEqual,
//   dl as runTransaction,
//   wl as serverTimestamp,
//   il as setDoc,
//   M as setLogLevel,
//   bh as snapshotEqual,
//   $h as startAfter,
//   Fh as startAt,
//   Oc as terminate,
//   rl as updateDoc,
//   Nc as waitForPendingWrites,
//   Dh as where,
//   pl as writeBatch,
// };
