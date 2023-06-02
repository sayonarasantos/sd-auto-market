package com.example.androidclient;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class CreateUserActivity extends AppCompatActivity {
    private EditText nomeEditText;
    private EditText senhaEditText;
    private EditText estadoEditText;
    private EditText cidadeEditText;
    private EditText bairroEditText;
    private EditText ruaEditText;
    private EditText numeroEditText;
    private EditText complementoEditText;
    private Button saveButton;

    private static final String API_URL = "http://localhost:8000/api";
    private static final MediaType JSON_MEDIA_TYPE = MediaType.parse("application/json; charset=utf-8");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create_user);

        nomeEditText = findViewById(R.id.nome);
        senhaEditText = findViewById(R.id.senha);
        estadoEditText = findViewById(R.id.estado);
        cidadeEditText = findViewById(R.id.cidade);
        bairroEditText = findViewById(R.id.bairro);
        ruaEditText = findViewById(R.id.rua);
        numeroEditText = findViewById(R.id.numero);
        complementoEditText = findViewById(R.id.complemento);
        saveButton = findViewById(R.id.BtnSaveUsuario);

        saveButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String nome = nomeEditText.getText().toString();
                String senha = senhaEditText.getText().toString();
                String estado = estadoEditText.getText().toString();
                String cidade = cidadeEditText.getText().toString();
                String bairro = bairroEditText.getText().toString();
                String rua = ruaEditText.getText().toString();
                String numero = numeroEditText.getText().toString();
                String complemento = complementoEditText.getText().toString();

                // Criar um objeto JSON com os dados do usuário
                String jsonBody = "{\"nome\":\"" + nome +
                                    "\", \"senha\":\"" + senha +
                                    "\", \"estado\":\"" + estado +
                                    "\", \"cidade\":\"" + cidade +
                                    "\", \"bairro\":\"" + bairro +
                                    "\", \"rua\":\"" + rua +
                                    "\", \"numero\":\"" + numero +
                                    "\", \"compelemento\":\"" + complemento +"\"}";

                // Enviar o objeto JSON para a API
                sendUserData(jsonBody);
            }
        });
    }

    private void sendUserData(final String jsonBody) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    OkHttpClient client = new OkHttpClient();

                    RequestBody requestBody = RequestBody.create(jsonBody, JSON_MEDIA_TYPE);
                    Request request = new Request.Builder()
                            .url(API_URL)
                            .post(requestBody)
                            .build();

                    Response response = client.newCall(request).execute();
                    if (response.isSuccessful()) {
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                Toast.makeText(CreateUserActivity.this, "Usuário cadastrado com sucesso!", Toast.LENGTH_SHORT).show();
                                finish();
                            }
                        });
                    } else {
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                Toast.makeText(CreateUserActivity.this, "Erro ao cadastrar usuário", Toast.LENGTH_SHORT).show();
                            }
                        });
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            Toast.makeText(CreateUserActivity.this, "Erro de conexão", Toast.LENGTH_SHORT).show();
                        }
                    });
                }
            }
        }).start();
    }
}